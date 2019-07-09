using System;
using System.Collections.Generic;
using System.Text;

namespace HRM.Application.Books.ViewModels
{
    public class BookViewModel
    {
        public string Id { get; set; }

        public string BookName { get; set; }

        public decimal Price { get; set; }

        public string Category { get; set; }

        public string Author { get; set; }
    }
}
