using Library.Application.Common.Dto;
using Library.Domain.Entities;
using Riok.Mapperly.Abstractions;

namespace Library.Application.Common.Mappers;

[Mapper]
public static partial class UserMapper
{
    public static UserListPaginationDetailsDto ToListPaginationDetailsDto(this (IReadOnlyList<User> Results, long TotalCount, int PageCount) entityData)
    {
        List<UserDetailsDto> dtoList = [];

        foreach (var result in entityData.Results)
        {
            var actions = result.GetActions();
            
            dtoList.Add(new UserDetailsDto(result.ID,
                result.FirstName,
                result.LastName,
                result.Email,
                result.Username,
                result.Password,
                result.PhoneNumber,
                new List<ActionDto>(actions.Select(x => new ActionDto(x.Name, x.Value)))));
        }

        return new UserListPaginationDetailsDto(dtoList,
            entityData.TotalCount,
            entityData.PageCount);
    }
}