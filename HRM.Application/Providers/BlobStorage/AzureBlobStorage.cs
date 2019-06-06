using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using HRM.Application.Providers.Azure.Interfaces;
using HRM.Application.Providers.BlobStorage.Interfaces;
using HRM.Common;
using HRM.Common.Exceptions;
using HRM.Common.Resources;
using Microsoft.Azure.Storage;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace HRM.Application.Providers.BlobStorage
{
    public class AzureBlobStorage : BaseBlobStorage, IBlobStorage
    {
        private readonly ILogger<AzureBlobStorage> _logger;
        private readonly IAzureBlobContext _blobContext;

        public AzureBlobStorage(IOptions<AppConfig> appConfig, IAzureBlobContext blobContext, ILogger<AzureBlobStorage> logger)
            : base(appConfig)
        {
            _blobContext = blobContext;
            _logger = logger;
        }

        public Task<Stream> GetBlobAsync(string key)
        {
            var blobAddress = KeyToAzureBlobAddress(key);
            return DownloadBlobAsync(key, blobAddress);
        }

        public async Task<byte[]> GetBlobAsByteArrayAsync(string key)
        {
            var blobStream = (MemoryStream)await GetBlobAsync(key);
            var blobBytes = blobStream.ToArray();
            return blobBytes;
        }

        public async Task DeleteBlobAsync(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                return;
            }

            var blobAddress = KeyToAzureBlobAddress(key);
            await _blobContext.DeleteBlobAsync(blobAddress.ContainerName, blobAddress.Path);
        }

        public async Task<string> CopyToCategoryAsync(string keyToCopy, string newCategory)
        {
            var newKey = CreateBlobKeyForCopy(keyToCopy, newCategory);
            var sourceBlobAddress = KeyToAzureBlobAddress(keyToCopy);
            var destinationBlobAddress = KeyToAzureBlobAddress(newKey);

            try
            {
                await _blobContext.StartCopyBlobAsync(sourceBlobAddress.ContainerName, sourceBlobAddress.Path, destinationBlobAddress.ContainerName, destinationBlobAddress.Path);
            }
            catch (StorageException ex)
            {
                // container not exist -> create and upload again
                if (ex.RequestInformation.HttpStatusCode == 404)
                {
                    _logger.LogInformation("Creating new container '{0}'", destinationBlobAddress.ContainerName.ToLower());
                    await _blobContext.CreateContainerAsync(destinationBlobAddress.ContainerName);
                    await _blobContext.StartCopyBlobAsync(sourceBlobAddress.ContainerName, sourceBlobAddress.Path, destinationBlobAddress.ContainerName, destinationBlobAddress.Path);
                }
                else
                {
                    throw new AppException(ex.InnerException, HRMResources.Error_AzureStorage_Error, ex.RequestInformation.HttpStatusMessage);
                }
            }

            return newKey;
        }

        public async Task<string> PutBlobAsync(string category, string name, Stream contents)
        {
            CreateAzureBlobAddress(category, name, out string key, out AzureBlobAddress blobAddress);

            try
            {
                await _blobContext.PutBlobAsync(blobAddress.ContainerName, blobAddress.Path, contents);
            }
            catch (StorageException ex)
            {
                // container not exist -> create and upload again
                if (ex.RequestInformation.HttpStatusCode == 404)
                {
                    _logger.LogInformation($"Creating new container '{category.ToLower()}'");
                    await _blobContext.CreateContainerAsync(blobAddress.ContainerName);
                    await _blobContext.PutBlobAsync(blobAddress.ContainerName, blobAddress.Path, contents);
                }
                else
                {
                    throw new AppException(ex.InnerException, HRMResources.Error_AzureStorage_Error, ex.RequestInformation.HttpStatusMessage);
                }
            }

            return key;
        }

        /// <summary>
        /// Return list of file keys
        /// </summary>
        /// <param name="category"></param>
        /// <returns></returns>
        public async Task<List<string>> ListBlockBlobsAsync(string category)
        {
            // TODO: test blobInfo.Name in production azure
            var result = new List<string>();
            var blobs = await _blobContext.ListBlobsAsync(category, null, true);
            foreach (var blobInfo in blobs)
            {
                var key = ParseBlobAddressFromBlobPath(category, blobInfo.Name);
                result.Add(key);
            }
            return result;
        }


        private void CreateAzureBlobAddress(string category, string name, out string key, out AzureBlobAddress blobAddress)
        {
            var ts = DateTime.UtcNow;
            var id = Guid.NewGuid().ToString("N");

            // Check input syntax
            if (!Regex.Match(category, "^[A-Za-z0-9]+$").Success)
            {
                throw new AppException(HRMResources.Error_BlobStorage_InvalidCategory, category);
            }

            name = GetValidFileName(name);

            // Key
            key = $"{category}:{ts:yyyyMMddHH}:{id}:{name}";

            // Blob address
            var fileName = string.Format("{0}_{1}", id, name);
            var path = $@"{ts.Year}/{ts.Month:00}/{ts.Day:00}/{ts.Hour:00}/{fileName}";
            blobAddress = new AzureBlobAddress(category, path);
        }


        private AzureBlobAddress KeyToAzureBlobAddress(string key)
        {
            var partOfKey = PartOfKey.ToAzureBlobAddress(key);

            var path = $@"{partOfKey.Year}/{partOfKey.Month}/{partOfKey.Day}/{partOfKey.Hour}/{partOfKey.FileName}";

            return new AzureBlobAddress(partOfKey.Category, path);
        }

        private async Task<Stream> DownloadBlobAsync(string key, AzureBlobAddress blobAddress)
        {
            var blobStream = new MemoryStream();
            try
            {
                await _blobContext.GetBlobAsync(blobAddress.ContainerName, blobAddress.Path, blobStream);
                blobStream.Position = 0;
                return blobStream;
            }
            catch (StorageException ex)
            {
                if (ex.RequestInformation.HttpStatusCode == 404)
                {
                    throw new AppException(ex.InnerException, HRMResources.Error_BlobStorage_NotFound, key);
                }

                throw new AppException(ex.InnerException, HRMResources.Error_AzureStorage_Error, ex.RequestInformation.HttpStatusMessage);
            }
        }

        private class PartOfKey
        {
            public string Id { get; set; }

            public string Category { get; private set; }

            public string Name { get; set; }

            public string FileName => string.Format("{0}_{1}", Id, Name);

            public string Year { get; private set; }

            public string Month { get; private set; }

            public string Day { get; private set; }

            public string Hour { get; private set; }

            public static PartOfKey ToAzureBlobAddress(string key)
            {
                if (string.IsNullOrEmpty(key))
                {
                    throw new AppException(HRMResources.Error_BlobStorage_InvalidKey, key, HRMResources.Error_BlobStorage_NullOrEmpty);
                }

                var parts = key.Split(':');
                if (parts.Length != 4)
                {
                    throw new AppException(HRMResources.Error_BlobStorage_InvalidKey, key, HRMResources.Error_BlobStorage_ValidParts);
                }

                var category = parts[0];
                var ts = parts[1];
                if (ts.Length != 10)
                {
                    throw new AppException(HRMResources.Error_BlobStorage_InvalidKey, key, HRMResources.Error_BlobStorage_ValidTimeStamp);
                }

                var year = ts.Substring(0, 4);
                var month = ts.Substring(4, 2);
                var day = ts.Substring(6, 2);
                var hour = ts.Substring(8, 2);
                var id = parts[2];
                var name = parts[3];

                return new PartOfKey
                {
                    Id = id,
                    Name = name,
                    Category = category,
                    Year = year,
                    Month = month,
                    Day = day,
                    Hour = hour
                };
            }
        }

        private class AzureBlobAddress
        {
            public string ContainerName { get; }

            public string Path { get; }

            public AzureBlobAddress(string containerName, string path)
            {
                ContainerName = containerName;
                Path = path;
            }
        }
    }
}
