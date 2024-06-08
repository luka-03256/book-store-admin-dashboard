using Library.Application.Common.Dto;
using Library.Application.Common.Mappers;
using MediatR;
using MongoDB.Entities;
using Order = Library.Domain.Entities.Order;

namespace Library.Application.Orders.Queries;



public record OrderDetailsQuery(string Id) : IRequest<OrderDetailsDto?>;

public class OrderDetailsQueryHandler : IRequestHandler<OrderDetailsQuery, OrderDetailsDto?>
{
    public async Task<OrderDetailsDto?> Handle(OrderDetailsQuery request, CancellationToken cancellationToken)
    {
        var entity = await DB.Find<Order>().OneAsync(request.Id, cancellationToken);

        if (entity != null)
        {
            return await entity.ToDetailsDto();
        }

        return null;
    }
}