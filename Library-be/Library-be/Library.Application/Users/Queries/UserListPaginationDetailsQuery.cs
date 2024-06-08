using Library.Application.Common.Dto;
using Library.Application.Common.Mappers;
using Library.Domain.Entities;
using MediatR;
using MongoDB.Entities;

namespace Library.Application.Users.Queries;

public record UserListPaginationDetailsQuery(int PageNumber, int PageSize) : IRequest<UserListPaginationDetailsDto>;

public class UserListPaginationDetailsHandler : IRequestHandler<UserListPaginationDetailsQuery, UserListPaginationDetailsDto>
{
    public async Task<UserListPaginationDetailsDto> Handle(UserListPaginationDetailsQuery request, CancellationToken cancellationToken)
    {
        var data = await DB.PagedSearch<User>()
            .PageNumber(request.PageNumber)
            .PageSize(request.PageSize)
            .Sort(x => x.Ascending(a => a.FirstName))
            .ExecuteAsync(cancellationToken);

        return data.ToListPaginationDetailsDto();
    }
}
