using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;

namespace HRM.Application.Utilities.AutoMapper
{
    public class AutoMapperConfiguration
    {
        public static MapperConfiguration RegisterMappings()
        {
            return new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
        }
    }
}
