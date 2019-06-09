using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Infrastructure.Interfaces;
using HRM.Common.Exceptions;
using HRM.Domain.Base;
using MediatR;

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

        public async Task<BaseListResponse<TViewModel>> ListAsync(BaseListQuery<TViewModel> request, CancellationToken cancellationToken)
        {
            var listResponse = await this._repository.ListAsync(request.State);

            return new BaseListResponse<TViewModel>()
            {
                ListCount = listResponse.ListCount,
                ListResult = this._mapper.Map<List<TViewModel>>(listResponse.ListResult)
            };
        }

        public async Task<TViewModel> CreateAsync(BaseCommand<TViewModel> request, CancellationToken cancellationToken)
        {
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
