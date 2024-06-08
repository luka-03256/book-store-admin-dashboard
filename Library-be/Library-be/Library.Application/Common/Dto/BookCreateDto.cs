using Library.Domain.Entities;

namespace Library.Application.Common.Dto;

public record BookCreateDto(string Name, string Publisher, string Description, string AuthorId,List<string> CategoryIds, List<string> OrderIds);