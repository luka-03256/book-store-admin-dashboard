using Library.Application.Common.Dto;
using Library.Application.Common.Mappers;
using MediatR;
using MongoDB.Entities;

namespace Library.Application.Books.Commands;

public record BookUpdateCommand(BookUpdateDto Book) : IRequest<BookDetailsDto>;

public class BookUpdateCommandHandler : IRequestHandler<BookUpdateCommand, BookDetailsDto>
{
    public async Task<BookDetailsDto> Handle(BookUpdateCommand request, CancellationToken cancellationToken)
    {
        var entity = request.Book.ToEntity();
        await entity.SaveAsync(cancellation: cancellationToken);
        return await entity.ToDetailsDto();
    }
}