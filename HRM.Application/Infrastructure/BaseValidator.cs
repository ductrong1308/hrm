using FluentValidation;
using HRM.Application.Infrastructure.ViewModel;

namespace HRM.Application.Infrastructure
{
    public abstract class BaseValidator<T>: AbstractValidator<T> where T: BaseViewModel
    {
    }
}
