namespace Library.Application.Common.Dto;

public record AuthorListPaginationDetailsDto(List<AuthorDetailsDto> Results, long TotalCount, int PageCount);