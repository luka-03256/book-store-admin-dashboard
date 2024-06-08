namespace Library.Application.Common.Dto;

public record UserDetailsDto(string Id, string FirstName, string LastName, string Email, string Username, string Password, string PhoneNumber, List<ActionDto> Actions);