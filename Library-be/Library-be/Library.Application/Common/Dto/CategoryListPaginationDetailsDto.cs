namespace Library.Application.Common.Dto;

public record CategoryListPaginationDetailsDto(List<CategoryDetailsDto> Results, long TotalCount, int PageCount);