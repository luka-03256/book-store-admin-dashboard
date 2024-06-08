using Library.Application.Common.Dto;
using Library.Application.Common.Mappers;
using Library.Domain.Entities;
using MediatR;
using MongoDB.Entities;

namespace Library.Application.Books.Queries;

public record BookDetailsQuery(string Id) : IRequest<BookDetailsDto?>;

public class BookDetailsQueryHandler : IRequestHandler<BookDetailsQuery, BookDetailsDto?>
{
    public async Task<BookDetailsDto?> Handle(BookDetailsQuery request, CancellationToken cancellationToken)
    {
        var entity = await DB.Find<Book>().OneAsync(request.Id, cancellationToken);

        if (entity != null)
        {
            return await entity.ToDetailsDto();
        }

        return null;
    }
}