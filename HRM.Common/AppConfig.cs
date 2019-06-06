using System;
using System.Collections.Generic;
using System.Text;

namespace HRM.Common
{
    public class AppConfig
    {
        public BlobStorageConfig BlobStorage { get; set; } = new BlobStorageConfig();

        public AzureConfig Azure { get; set; } = new AzureConfig();
    }

    public class BlobStorageConfig
    {
        public string FileSystemBlobStorageLocation { get; set; }

        public string AzureStorageConnectionString { get; set; }
    }


    public class AzureConfig
    {
        public int AzureBlobRetryBackoffTime { get; set; } = 1;

        public int AzureBlobMaxRetryAttempts { get; set; } = 3;

        public int AzureQueueRetryBackoffTime { get; set; } = 1;

        public int AzureQueueMaxRetryAttempts { get; set; } = 3;
    }
}
