using Library.Application.Common.Dto;
using Library.Domain.Entities;
using Riok.Mapperly.Abstractions;

namespace Library.Application.Common.Mappers;

[Mapper]
public static partial class AuthorMapper
{
    public static AuthorListPaginationDetailsDto ToListPaginationDetailsDto(this (IReadOnlyList<Author> Results, long TotalCount, int PageCount) entityData)
    {
        List<AuthorDetailsDto> dtoList = [];

        foreach (var result in entityData.Results)
        {
            var actions = result.GetActions();
            
            dtoList.Add(new AuthorDetailsDto(result.ID,
                result.FirstName,
                result.DateOfBirth,
                result.LastName,
                new List<ActionDto>(actions.Select(x => new ActionDto(x.Name, x.Value)))));
        }

        return new AuthorListPaginationDetailsDto(dtoList,
            entityData.TotalCount,
            entityData.PageCount);
    }
}
