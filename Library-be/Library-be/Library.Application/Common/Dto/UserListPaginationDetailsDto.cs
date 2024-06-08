namespace Library.Application.Common.Dto;

public record UserListPaginationDetailsDto(List<UserDetailsDto> Results, long TotalCount, int PageCount);