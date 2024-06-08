using FluentValidation;

namespace Library.Application.Authors.Queries;

public class AuthorListPaginationDetailsQueryValidator : AbstractValidator<AuthorListPaginationDetailsQuery>
{
    public AuthorListPaginationDetailsQueryValidator()
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