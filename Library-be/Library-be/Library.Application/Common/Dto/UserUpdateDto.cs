namespace Library.Application.Common.Dto;

public record UserUpdateDto(string Id, string FirstName, string LastName, string Email, string Username, string Password, string PhoneNumber);