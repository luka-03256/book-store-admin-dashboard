

using Library.Application.Common.Dto;
using Library.Domain.Entities;
using MongoDB.Entities;
using Riok.Mapperly.Abstractions;

namespace Library.Application.Common.Mappers;

[Mapper]
public static partial class BookMapper
{
    public static Book ToEntity(this BookCreateDto dto)
    {
        var entity = new Book
        {
            Name = dto.Name,
            Description = dto.Description,
            Publisher = dto.Publisher,
            Author = new One<Author>(dto.AuthorId)
        };

        return entity;
    }

    public static Book ToEntity(this BookUpdateDto dto)
    {
        var entity = new Book
        {
            Name = dto.Name,
            Description = dto.Description,
            Publisher = dto.Publisher,
            ID = dto.Id
        };

        return entity;
    }

    public static BookUpdateDto ToUpdateDto(this Book entity)
    {
        var dto = new BookUpdateDto(entity.Name, entity.Publisher,
            entity.Description, entity.ID);
        return dto;
    }


    // public static partial BookUpdateDto ToUpdateDto(this Book entity);


    public static async Task<BookDetailsDto> ToDetailsDto(this Book entity)
    {
        var author = await entity.Author.ToEntityAsync();
        var dto = new BookDetailsDto(entity.Name, entity.Publisher,
            entity.Description, entity.ID, author.FirstName);

        return dto;
    }
}