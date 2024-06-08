using Library.Application.Common.Dto;
using Library.Application.Common.Mappers;
using MediatR;
using MongoDB.Entities;

namespace Library.Application.Orders.Commands;

public record OrderUpdateCommand(OrderUpdateDto Order) : IRequest<OrderDetailsDto>;

public class OrderUpdateCommandHandler : IRequestHandler<OrderUpdateCommand, OrderDetailsDto>
{
    public async Task<OrderDetailsDto> Handle(OrderUpdateCommand request, CancellationToken cancellationToken)
    {
        var entity = request.Order.ToEntity();
        await entity.SaveAsync(cancellation: cancellationToken);
        return await entity.ToDetailsDto();
    }
}
