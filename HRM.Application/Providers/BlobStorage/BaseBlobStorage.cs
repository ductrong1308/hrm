using System;
using System.Linq;
using System.Text.RegularExpressions;
using HRM.Common;
using HRM.Common.Exceptions;
using HRM.Common.Resources;
using Microsoft.Extensions.Options;

namespace HRM.Application.Providers.BlobStorage
{
    public class BaseBlobStorage
    {
        private const string NO_NAME = "NoName";
        private const int MAX_FILE_NAME_LENGTH = 70;
        private const int MAX_FILE_EXTENSION_LENGTH = 10;

        protected readonly AppConfig AppConfig;

        protected BaseBlobStorage(IOptions<AppConfig> appConfig)
        {
            AppConfig = appConfig.Value;
        }

        /// <summary>
        /// Removes special characters.
        /// Truncate if file name is too long.
        /// </summary>
        /// <param name="fileName">
        /// The file name.
        /// </param>
        protected string GetValidFileName(string fileName)
        {
            var name = fileName;
            if (string.IsNullOrWhiteSpace(name))
            {
                return NO_NAME;
            }

            name = Regex.Replace(name, "[^A-Za-z0-9\\s._-]+", string.Empty).Trim();
            if (name.Length > MAX_FILE_NAME_LENGTH)
            {
                var fileNameElements = name.Split('.');
                var fileExtension = fileNameElements.Last();
                var extensionHasFullStop = string.Format(".{0}", fileExtension);
                var nonFileExtension = fileNameElements.Length == 1 || (fileNameElements.Length > 1 && fileExtension.Length >= MAX_FILE_EXTENSION_LENGTH);

                // Cater for the case where there is no file extension passed in.
                if (nonFileExtension)
                {
                    name = string.Format(name.Substring(0, MAX_FILE_NAME_LENGTH));
                }
                else
                {
                    name = name.Substring(0, MAX_FILE_NAME_LENGTH - extensionHasFullStop.Length);
                    name = string.Format("{0}.{1}", name, fileExtension);
                }
            }

            return name;
        }

        /// <summary>
        /// Create key for the coping blob
        /// </summary>
        /// <param name="keyToCopy">Key of blob to copy</param>
        /// <param name="newCategory">Category of new blob.</param>
        /// <returns>New key of blob copied.</returns>
        protected string CreateBlobKeyForCopy(string keyToCopy, string newCategory)
        {
            string[] parts = keyToCopy.Split(':');
            if (parts.Length != 4)
            {
                throw new AppException(HRMResources.Error_BlobStorage_InvalidKey, HRMResources.Error_BlobStorage_ValidParts, keyToCopy);
            }

            string ts = parts[1];
            if (ts.Length != 10)
            {
                throw new AppException(HRMResources.Error_BlobStorage_InvalidKey, HRMResources.Error_BlobStorage_ValidTimeStamp, keyToCopy);
            }

            string id = Guid.NewGuid().ToString("N");
            ts = DateTime.UtcNow.ToString("yyyyMMddHH");
            string name = parts[3];

            return $"{newCategory}:{ts}:{id}:{name}";
        }

        public string ParseBlobAddressFromBlobPath(string category, string blobPath)
        {
            blobPath = blobPath.Replace("\\", "/");
            var pathRegex = new Regex(@"^(?<year>\w+)/(?<month>\w+)/(?<day>\w+)/(?<hour>\w+)/(?<id>[^_]+)_(?<filename>.+)");
            var match = pathRegex.Match(blobPath);
            if (match.Success)
            {
                var year = match.Groups["year"].Value;
                var month = match.Groups["month"].Value;
                var day = match.Groups["day"].Value;
                var hour = match.Groups["hour"].Value;
                var id = match.Groups["id"].Value;
                var filename = match.Groups["filename"].Value;
                return $"{category}:{year}{month}{day}{hour}:{id}:{filename}";
            }

            throw new AppException(string.Format(HRMResources.Error_BlobStorage_Cannot_Parse_Into_Address, blobPath));
        }
    }
}
