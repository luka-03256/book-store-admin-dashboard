using FluentValidation;

namespace Library.Application.Categories.Queries;

public class CategoryListPaginationDetailsQueryValidator : AbstractValidator<CategoryListPaginationDetailsQuery>
{
    public CategoryListPaginationDetailsQueryValidator()
    {
        RuleFor(x => x.PageNumber)
            .NotEmpty()
            .GreaterThanOrEqualTo(1)
            .LessThanOrEqualTo(100);
        
        RuleFor(x => x.PageSize)
            .NotEmpty()
            .GreaterThanOrEqualTo(1)
            .LessThanOrEqualTo(50);
    }
}