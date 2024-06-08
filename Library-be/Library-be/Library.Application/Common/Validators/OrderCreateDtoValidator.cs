using FluentValidation;
using Library.Application.Common.Dto;

namespace Library.Application.Common.Validators;

public class OrderCreateDtoValidator : AbstractValidator<OrderCreateDto>
{
    public OrderCreateDtoValidator()
    {
        RuleFor(x => x.UserComment)
            .NotEmpty()
            .MinimumLength(7);

        RuleFor(x => x.UserId)
            .NotEmpty();

        RuleFor(x => x.BookIds)
            .NotEmpty();

    }
}