namespace Library.Application.Common.Dto;

public record AuthorDetailsDto(string Id, string FirstName, string DateOfBirth, string LastName, List<ActionDto> Actions);