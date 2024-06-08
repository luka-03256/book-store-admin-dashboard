using Library.Application.Common.Dto;
using Library.Domain.Entities;
using Riok.Mapperly.Abstractions;

namespace Library.Application.Common.Mappers;

[Mapper]
public static partial class CategoryMapper
{
    public static CategoryListPaginationDetailsDto ToListPaginationDetailsDto(this (IReadOnlyList<Category> Results, long TotalCount, int PageCount) entityData)
    {
        List<CategoryDetailsDto> dtoList = [];

        foreach (var result in entityData.Results)
        {
            var actions = result.GetActions();
            
            dtoList.Add(new CategoryDetailsDto(result.ID,
                result.Name,
                new List<ActionDto>(actions.Select(x => new ActionDto(x.Name, x.Value)))));
        }

        return new CategoryListPaginationDetailsDto(dtoList,
            entityData.TotalCount,
            entityData.PageCount);
    }
}