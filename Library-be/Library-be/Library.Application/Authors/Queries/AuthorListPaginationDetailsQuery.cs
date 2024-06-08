using Library.Application.Common.Dto;
using Library.Application.Common.Mappers;
using Library.Domain.Entities;
using MediatR;
using MongoDB.Entities;

namespace Library.Application.Authors.Queries;

public record AuthorListPaginationDetailsQuery(int PageNumber, int PageSize) : IRequest<AuthorListPaginationDetailsDto>;

public class UserListPaginationDetailsHandler : IRequestHandler<AuthorListPaginationDetailsQuery, AuthorListPaginationDetailsDto>
{
    public async Task<AuthorListPaginationDetailsDto> Handle(AuthorListPaginationDetailsQuery request, CancellationToken cancellationToken)
    {
        var data = await DB.PagedSearch<Author>()
            .PageNumber(request.PageNumber)
            .PageSize(request.PageSize)
            .Sort(x => x.Ascending(a => a.FirstName))
            .ExecuteAsync(cancellationToken);

        return data.ToListPaginationDetailsDto();
    }
}
