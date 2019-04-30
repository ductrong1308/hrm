using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Infrastructure;
using HRM.Domain.Base;
using MediatR;

namespace HRM.Application
{
    public class BaseRequestHandler<TEntity, TRequest, TResponse> : IRequestHandler<TRequest, TResponse>
        where TRequest : IRequest<TResponse> where TEntity : BaseEntity
    {
        protected readonly IMapper _mapper;
        protected readonly IUnitOfWork _unitOfWork;
        protected readonly IRepository<TEntity> _repository;

        public BaseRequestHandler() { }

        public BaseRequestHandler(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _repository = unitOfWork.Repository<TEntity>();
        }

        public virtual Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
