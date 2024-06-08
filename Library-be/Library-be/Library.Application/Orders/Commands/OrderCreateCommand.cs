using Library.Application.Common.Dto;
using Library.Application.Common.Mappers;
using Library.Domain.Entities;
using MediatR;
using MongoDB.Entities;

namespace Library.Application.Orders.Commands;

public record OrderCreateCommand(OrderCreateDto Order) : IRequest<OrderDetailsDto?>;

public class OrderCreateCommandHandler : IRequestHandler<OrderCreateCommand, OrderDetailsDto?>
{
    public async Task<OrderDetailsDto?> Handle(OrderCreateCommand request, CancellationToken cancellationToken)
    {
        var userEntity = await DB.Find<User>().OneAsync(request.Order.UserId, cancellationToken);
        
        if (userEntity != null)
        {
            var entity = request.Order.ToEntity();
            entity.UserEmbeded = userEntity;
            await entity.SaveAsync(cancellation: cancellationToken);
            await entity.Books.AddAsync(request.Order.BookIds, cancellation: cancellationToken);
            return await entity.ToDetailsDto();
        }

        return null;
    }
}