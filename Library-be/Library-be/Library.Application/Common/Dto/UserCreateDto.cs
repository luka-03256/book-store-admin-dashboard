namespace Library.Application.Common.Dto;

public record UserCreateDto(string FirstName, string LastName, string Email, string Username, string Password, string PhoneNumber);