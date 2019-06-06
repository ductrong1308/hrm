using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Application.Providers.BlobStorage.Interfaces
{
    public interface IBlobStorage
    {
        Task<Stream> GetBlobAsync(string key);

        Task<byte[]> GetBlobAsByteArrayAsync(string key);

        Task DeleteBlobAsync(string key);

        Task<string> CopyToCategoryAsync(string keyToCopy, string newCategory);

        Task<string> PutBlobAsync(string category, string name, Stream contents);

        Task<List<string>> ListBlockBlobsAsync(string category);
    }
}
