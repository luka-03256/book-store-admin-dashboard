using Library.Application.Common.Dto;
using Library.Application.Common.Mappers;
using Library.Domain.Entities;
using MediatR;
using MongoDB.Entities;

namespace Library.Application.Books.Commands;

public record BookCreateCommand(BookCreateDto Book) : IRequest<BookDetailsDto?>;

public class BookCreateCommandHandler : IRequestHandler<BookCreateCommand, BookDetailsDto?>
{
    public async Task<BookDetailsDto?> Handle(BookCreateCommand request, CancellationToken cancellationToken)
    {
        var authorEntity = await DB.Find<Author>().OneAsync(request.Book.AuthorId, cancellationToken);
        
        if (authorEntity != null)
        {
            var entity = request.Book.ToEntity();
            entity.AuthorEmbeded = authorEntity;
            await entity.SaveAsync(cancellation: cancellationToken);
            await entity.Orders.AddAsync(request.Book.OrderIds, cancellation: cancellationToken);
            return await entity.ToDetailsDto();
        }

        return null;
    }
}