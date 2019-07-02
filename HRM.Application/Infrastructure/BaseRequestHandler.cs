using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Infrastructure.Interfaces;
using HRM.Application.Infrastructure.ViewModel;
using HRM.Common.Exceptions;
using HRM.Domain.Base;

namespace HRM.Application.Infrastructure
{
    public class BaseRequestHandler<TEntity, TViewModel> 
        where TEntity : BaseEntity 
        where TViewModel : BaseViewModel
    {
        protected readonly IMapper _mapper;
        protected readonly IUnitOfWork _unitOfWork;
        protected readonly IRepository<TEntity> _repository;

        public BaseRequestHandler(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _repository = unitOfWork.Repository<TEntity>();
        }

        public async Task<ListResponseViewModel<TViewModel>> ListAsync(BaseListQuery<TViewModel> request, CancellationToken cancellationToken)
        {
            var listResponse = await this._repository.ListAsync(request.State);

            return new ListResponseViewModel<TViewModel>()
            {
                ListCount = listResponse.ListCount,
                ListResult = this._mapper.Map<List<TViewModel>>(listResponse.ListResult)
            };
        }

        public async Task<TViewModel> CreateAsync(BaseCommand<TViewModel> request, CancellationToken cancellationToken)
        {
            request.ViewModel.CreatedDate = DateTime.UtcNow;
            request.ViewModel.CreatedUser = "admin";
            request.ViewModel.Validate();

            var entity = _mapper.Map<TEntity>(request.ViewModel);
            if(entity == null)
            {
                throw new AppException("Invalid Mapping Entity Data");
            }

            await this._repository.CreateAsync(_mapper.Map<TEntity>(request.ViewModel));
            return request.ViewModel;
        }
    }
}
