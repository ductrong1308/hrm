using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.Storage.Blob;

namespace HRM.Application.Providers.Azure.Interfaces
{
    public interface IAzureBlobContext
    {
        /// <summary>
        /// Resolves blob path to CloudBlockBlob reference
        /// </summary>
        CloudBlockBlob ResolveCloudBlockBlob(string containerName, string path);

        /// <summary>
        /// List blobs in a container. To list all blobs, pass NULL for prefix.
        /// </summary>
        Task<List<CloudBlockBlob>> ListBlobsAsync(string containerName, string prefix = null, bool useFlatBlobListing = false, BlobListingDetails blobListingDetails = BlobListingDetails.None, int? maxResults = null);

        Task GetBlobAsync(string containerName, string path, Stream outStream);

        Task DeleteBlobAsync(string containerName, string path);

        Task PutBlobAsync(string containerName, string path, Stream inStream);

        Task StartCopyBlobAsync(string sourceContainerName, string sourcePath, string destinationContainerName, string destinationPath);

        /// <summary>
        /// Start bulk coping the whole directory.
        /// This just starts the coping process, need to monitor this process using the WaitForCopyToFinish method
        /// </summary>
        /// <param name="srcDir">
        /// The source directory.
        /// </param>
        /// <param name="dest">
        /// The destination.
        /// </param>
        /// <param name="blobToken">
        /// The blob token.
        /// </param>
        Task StartCopyDirectoryAsync(CloudBlobDirectory srcDir, CloudBlobContainer dest, string blobToken);

        /// <summary>
        /// Backup blobs that are modified recently and have different hash value with ones in backup store
        /// </summary>
        /// <param name="containerName">
        /// The container name.
        /// </param>
        /// <param name="destConnectionString">
        /// The destination Connection String to backup to.
        /// </param>
        /// <param name="daysToBackCheck">
        /// The days To Back Check.
        /// </param>
        /// <remarks>
        /// See https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/12/introducing-asynchronous-cross-account-copy-blob/
        /// </remarks>
        Task BackupBlobsAsync(string containerName, string destConnectionString, int daysToBackCheck);

        Task CreateContainerAsync(string containerName);

        Task DeleteContainerAsync(string containerName);

        CloudBlobContainer GetContainer(string containerName);

        string GetBlobUrl(string containerName, string path);

        Task<long> GetBlobSize(string containerName, string path);
    }
}
