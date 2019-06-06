using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using HRM.Application.Providers.BlobStorage.Interfaces;
using HRM.Common;
using HRM.Common.Exceptions;
using HRM.Common.Resources;
using Microsoft.Extensions.Options;

namespace HRM.Application.Providers.BlobStorage
{
    public class FileSystemBlobStorage: BaseBlobStorage, IBlobStorage
    {
        private readonly string _rootPath;

        public FileSystemBlobStorage(IOptions<AppConfig> appConfig)
            : base(appConfig)
        {
            _rootPath = AppConfig.BlobStorage.FileSystemBlobStorageLocation;
            if (!_rootPath.EndsWith("\\"))
            {
                _rootPath = _rootPath + "\\";
            }
        }

        public Task<Stream> GetBlobAsync(string key)
        {
            return Task.Run<Stream>(() =>
            {
                var filePath = BlobKeyToPath(key, true, false);
                return new FileStream(filePath, FileMode.Open, FileAccess.Read);
            });
        }

        public async Task<byte[]> GetBlobAsByteArrayAsync(string key)
        {
            string filePath = BlobKeyToPath(key, true, false);
            using (var file = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read, 4096, true))
            {
                byte[] buff = new byte[file.Length];
                await file.ReadAsync(buff, 0, (int)file.Length);
                return buff;
            }
        }

        public Task DeleteBlobAsync(string key)
        {
            return Task.Run(() =>
            {
                if (string.IsNullOrEmpty(key))
                {
                    return;
                }

                var filePath = BlobKeyToPath(key, false, false);
                var file = new FileInfo(filePath);
                if (file.Exists)
                {
                    file.Delete();
                }
            });
        }

        public async Task<string> CopyToCategoryAsync(string keyToCopy, string newCategory)
        {
            var newKey = CreateBlobKeyForCopy(keyToCopy, newCategory);
            var newFilePath = BlobKeyToPath(newKey, false, true);
            var oldFilePath = BlobKeyToPath(keyToCopy, true, false);

            using (var oldFileStream = new FileStream(oldFilePath, FileMode.Open, FileAccess.Read))
            {
                using (var newFileStream = new FileStream(newFilePath, FileMode.OpenOrCreate, FileAccess.ReadWrite))
                {
                    await oldFileStream.CopyToAsync(newFileStream);
                    await newFileStream.FlushAsync();
                }
            }

            return newKey;
        }

        public async Task<string> PutBlobAsync(string category, string name, Stream contents)
        {
            CreateFile(category, name, out string key, out FileInfo file);

            var buffer = new byte[4096];
            using (var fs = new FileStream(file.FullName, FileMode.Create, FileAccess.Write))
            {
                var count = contents.Read(buffer, 0, buffer.Length);
                while (count > 0)
                {
                    fs.Write(buffer, 0, count);
                    count = await contents.ReadAsync(buffer, 0, buffer.Length);
                }
            }

            return key;
        }

        public string BlobKeyToPath(string key, bool checkIfFileExists, bool createDirIfNotExists)
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

            var relativePath = $"{category}\\{year}\\{month}\\{day}\\{hour}";
            var dir = new DirectoryInfo(_rootPath + relativePath);
            if (!dir.Exists)
            {
                if (createDirIfNotExists)
                {
                    dir.Create();
                }
                else
                {
                    throw new AppException(HRMResources.Error_BlobStorage_NotFound, key);
                }
            }

            var fileName = string.Format("{0}_{1}", id, name);
            var file = new FileInfo(dir.FullName + "\\" + fileName);
            if (checkIfFileExists)
            {
                if (!file.Exists)
                {
                    throw new AppException(HRMResources.Error_BlobStorage_NotFound, key);
                }
            }

            return file.FullName;
        }

        private void CreateFile(string category, string name, out string key, out FileInfo file)
        {
            var ts = DateTime.UtcNow;
            var id = Guid.NewGuid().ToString("N");

            // Check input syntax
            if (!Regex.Match(category, "^[A-Za-z0-9]+$").Success)
            {
                throw new AppException(HRMResources.Error_BlobStorage_InvalidCategory, category);
            }

            name = GetValidFileName(name);

            // Build blob key
            key = $"{category}:{ts:yyyyMMddHH}:{id}:{name}";

            // Make directory where we want to save the data
            var relativePath = $"{category}\\{ts.Year}\\{ts.Month:00}\\{ts.Day:00}\\{ts.Hour:00}";
            var dir = new DirectoryInfo(_rootPath + relativePath);
            if (!dir.Exists)
            {
                dir.Create();
            }

            // Make the file name
            var fileName = string.Format("{0}_{1}", id, name);
            file = new FileInfo(dir.FullName + "\\" + fileName);
        }

        public async Task<List<string>> ListBlockBlobsAsync(string category)
        {
            return await Task.Run(() =>
            {
                var result = new List<string>();
                var dir = Path.Combine(_rootPath, category);
                if (!Directory.Exists(dir))
                {
                    return result;
                }
                var files = Directory.GetFiles(dir, "*.*", SearchOption.AllDirectories);
                foreach (var file in files)
                {
                    var relativePath = file.Replace(dir + "\\", "");
                    var key = ParseBlobAddressFromBlobPath(category, relativePath);
                    result.Add(key);
                }
                return result;
            });
        }
    }
}
