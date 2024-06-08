namespace Library.Application.Common.Dto;

public record CategoryDetailsDto(string Id, string Name, List<ActionDto> Actions);