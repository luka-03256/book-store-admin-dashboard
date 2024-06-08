using Library.Domain.Entities;

namespace Library.Application.Common.Dto;

public record OrderCreateDto(string UserComment, string UserId, List<string> BookIds);