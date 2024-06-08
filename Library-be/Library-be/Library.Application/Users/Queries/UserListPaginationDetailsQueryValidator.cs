using FluentValidation;

namespace Library.Application.Users.Queries;

public class UserListPaginationDetailsQueryValidator : AbstractValidator<UserListPaginationDetailsQuery>
{
    public UserListPaginationDetailsQueryValidator()
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