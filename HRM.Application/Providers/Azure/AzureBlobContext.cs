using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Application.Providers.Azure.Interfaces;
using HRM.Application.Providers.BlobStorage;
using HRM.Application.Providers.BlobStorage.Interfaces;
using HRM.Common;
using HRM.Common.Exceptions;
using HRM.Common.Resources;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using Microsoft.Azure.Storage.RetryPolicies;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace HRM.Application.Providers.Azure
{
    public class AzureBlobContext : IAzureBlobContext
    {
        private readonly ILogger<AzureBlobContext> _logger;
        private readonly CloudBlobClient _blobClient;

        public AzureBlobContext(IOptions<AppConfig> appConfig, ILogger<AzureBlobContext> logger) : this(appConfig.Value.BlobStorage.AzureStorageConnectionString, appConfig, logger)
        {
        }

        public AzureBlobContext(string connectionString, IOptions<AppConfig> appConfig, ILogger<AzureBlobContext> logger)
        {
            _logger = logger;

            var storageAccount = CloudStorageAccount.Parse(connectionString);
            _blobClient = storageAccount.CreateCloudBlobClient();
            _blobClient.DefaultRequestOptions = new BlobRequestOptions
            {
                RetryPolicy = new ExponentialRetry(TimeSpan.FromSeconds(appConfig.Value.Azure.AzureBlobRetryBackoffTime), appConfig.Value.Azure.AzureBlobMaxRetryAttempts)
            };
        }

        public CloudBlockBlob ResolveCloudBlockBlob(string containerName, string path)
        {
            var container = _blobClient.GetContainerReference(containerName.ToLower());
            var blockBlob = container.GetBlockBlobReference(path);
            return blockBlob;
        }

        public async Task<List<CloudBlockBlob>> ListBlobsAsync(string containerName, string prefix = null, bool useFlatBlobListing = false, BlobListingDetails blobListingDetails = BlobListingDetails.None, int? maxResults = null)
        {
            var blobs = new List<CloudBlockBlob>();
            var container = _blobClient.GetContainerReference(containerName.ToLower());
            BlobContinuationToken continuationToken = null;

            do
            {
                var resultSegment = await container.ListBlobsSegmentedAsync(prefix, useFlatBlobListing, blobListingDetails, maxResults, continuationToken, null, null);
                blobs.AddRange(resultSegment.Results.OfType<CloudBlockBlob>());

                continuationToken = resultSegment.ContinuationToken;
            }
            while (continuationToken != null);

            return blobs;
        }

        public async Task GetBlobAsync(string containerName, string path, Stream outStream)
        {
            var blockBlob = ResolveCloudBlockBlob(containerName, path);
            await blockBlob.DownloadToStreamAsync(outStream);
        }

        public async Task DeleteBlobAsync(string containerName, string path)
        {
            var blockBlob = ResolveCloudBlockBlob(containerName, path);
            await blockBlob.DeleteIfExistsAsync();
        }

        public async Task PutBlobAsync(string containerName, string path, Stream inStream)
        {
            var blockBlob = ResolveCloudBlockBlob(containerName, path);
            await blockBlob.UploadFromStreamAsync(inStream);
        }

        public async Task StartCopyBlobAsync(string sourceContainerName, string sourcePath, string destinationContainerName, string destinationPath)
        {
            var sourceBlockBlob = ResolveCloudBlockBlob(sourceContainerName, sourcePath);
            var destinationBlockBlob = ResolveCloudBlockBlob(destinationContainerName, destinationPath);
            await destinationBlockBlob.StartCopyAsync(sourceBlockBlob);
        }

        public async Task StartCopyDirectoryAsync(CloudBlobDirectory srcDir, CloudBlobContainer dest, string blobToken)
        {
            var blobs = new List<CloudBlockBlob>();
            BlobContinuationToken continuationToken = null;

            do
            {
                var resultSegment = await srcDir.ListBlobsSegmentedAsync(continuationToken);
                blobs.AddRange(resultSegment.Results.OfType<CloudBlockBlob>());

                continuationToken = resultSegment.ContinuationToken;
            }
            while (continuationToken != null);

            foreach (var srcBlob in blobs)
            {
                try
                {
                    CloudBlob destBlob = dest.GetBlockBlobReference(srcBlob.Name);
                    await destBlob.StartCopyAsync(new Uri(string.Format("{0}{1}", srcBlob.Uri, blobToken)));
                }
                catch (Exception ex)
                {
                    // log failure and skip this to continue with the rest
                    _logger.LogError($"Fail start copying {srcBlob.Name} - {AppException.GetTrueExceptionMessage(ex)}");
                }
            }
        }

        public Task BackupBlobsAsync(string containerName, string destConnectionString, int daysToBackCheck)
        {
            throw new System.NotImplementedException();
        }

        public async Task CreateContainerAsync(string containerName)
        {
            var container = _blobClient.GetContainerReference(containerName.ToLower());
            await container.CreateIfNotExistsAsync();
        }

        public async Task DeleteContainerAsync(string containerName)
        {
            var container = _blobClient.GetContainerReference(containerName.ToLower());
            await container.DeleteIfExistsAsync();
        }

        public CloudBlobContainer GetContainer(string containerName)
        {
            return _blobClient.GetContainerReference(containerName.ToLower());
        }

        public string GetBlobUrl(string containerName, string path)
        {
            var blockBlob = ResolveCloudBlockBlob(containerName, path);
            return blockBlob.Uri.AbsoluteUri;
        }

        public async Task<long> GetBlobSize(string containerName, string path)
        {
            var blockBlob = ResolveCloudBlockBlob(containerName, path);
            if (!await blockBlob.ExistsAsync())
            {
                throw new AppException(HRMResources.Error_BlobStorage_NotFound, $"{containerName} {path}");
            }

            await blockBlob.FetchAttributesAsync();
            return blockBlob.Properties.Length;
        }
    }
}
