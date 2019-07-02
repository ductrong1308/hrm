using System;
using AutoMapper;
using FluentValidation;
using HRM.Application.Employees.Commands.CreateEmployee;
using HRM.Application.Infrastructure.ViewModel;
using HRM.Application.Utilities.AutoMapper.Interfaces;
using HRM.Domain.Base;
using HRM.Domain.Entities;

namespace HRM.Application.Employees.ViewModels
{
    public class EmployeeViewModel : BaseViewModel, ICreateMapping
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string JobTitle { get; set; }

        public string RoleList { get; set; }

        public string ImageUrl { get; set; }

        public string FullName => string.Format("{0} {1}", FirstName, LastName);

        public override void Validate()
        {
            new CreateEmployeeValidator().ValidateAndThrow(this);
        }

        public void CreateMapping(Profile profile)
        {
            profile.CreateMap<Employee, EmployeeViewModel>().IncludeBase<BaseEntity, BaseViewModel>();
            profile.CreateMap<EmployeeViewModel, Employee>().IncludeBase<BaseViewModel, BaseEntity>();
        }
    }
}
