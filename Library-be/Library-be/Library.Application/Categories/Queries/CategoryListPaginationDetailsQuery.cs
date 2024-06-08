using Library.Application.Common.Dto;
using Library.Application.Common.Mappers;
using Library.Domain.Entities;
using MediatR;
using MongoDB.Entities;

namespace Library.Application.Categories.Queries;

public record CategoryListPaginationDetailsQuery(int PageNumber, int PageSize) : IRequest<CategoryListPaginationDetailsDto>;

public class CategoryListPaginationDetailsHandler : IRequestHandler<CategoryListPaginationDetailsQuery, CategoryListPaginationDetailsDto>
{
    public async Task<CategoryListPaginationDetailsDto> Handle(CategoryListPaginationDetailsQuery request, CancellationToken cancellationToken)
    {
        var data = await DB.PagedSearch<Category>()
            .PageNumber(request.PageNumber)
            .PageSize(request.PageSize)
            .Sort(x => x.Ascending(a => a.Name))
            .ExecuteAsync(cancellationToken);

        return data.ToListPaginationDetailsDto();
    }
}