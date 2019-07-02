using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using AutoMapper;
using HRM.Application.Infrastructure.ViewModel;
using HRM.Application.Utilities.AutoMapper.Interfaces;
using HRM.Domain.Base;

namespace HRM.Application.Utilities.AutoMapper
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            var types = typeof(ICreateMapping).GetTypeInfo().Assembly.GetTypes();

            this.LoadEntityMappings(types);
        }

        private void LoadEntityMappings(IEnumerable<Type> types)
        {
            // Define mapping for base class
            this.CreateMap<BaseViewModel, BaseEntity>().ForMember(x => x.RowVersion, c => c.MapFrom(dto => ByteArrayConverter.FromString(dto.RowVersion)));
            this.CreateMap<BaseEntity, BaseViewModel>().ForMember(x => x.RowVersion, c => c.MapFrom(entity => ByteArrayConverter.ToString(entity.RowVersion)));

            var maps = (from t in types
                        where typeof(ICreateMapping).IsAssignableFrom(t)
                              && !t.GetTypeInfo().IsAbstract
                              && !t.GetTypeInfo().IsInterface
                        select (ICreateMapping)Activator.CreateInstance(t)).ToArray();

            foreach (var map in maps)
            {
                map.CreateMapping(this);
            }
        }
    }
}
