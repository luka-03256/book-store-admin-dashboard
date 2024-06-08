using Library.Application.Common.Dto;
using Library.Domain.Entities;
using MongoDB.Entities;
using Riok.Mapperly.Abstractions;
using Order = Library.Domain.Entities.Order;


namespace Library.Application.Common.Mappers;

[Mapper]
public static partial class OrderMapper
{
    public static Order ToEntity(this OrderCreateDto dto)
    {
        var entity = new Order
        {
            UserComment = dto.UserComment,
            User = new One<User>(dto.UserId)
        };
        return entity;
    }

    public static Order ToEntity(this OrderUpdateDto dto)
    {
        var entity = new Order
        {
            UserComment = dto.UserComment,
            ID = dto.Id
        };
        return entity;
    }

    public static partial OrderUpdateDto ToUpdateDto(this Order entity);
    
    
    public static async Task<OrderDetailsDto> ToDetailsDto(this Order entity)
    {
        var user = await entity.User.ToEntityAsync();
        var dto = new OrderDetailsDto(entity.UserComment,
            entity.ID, user.Email);
        return dto;
    }
}