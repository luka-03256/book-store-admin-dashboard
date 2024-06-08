using FluentValidation;
using Library.Application.Common.Dto;
using Library.Application.Common.Validators;

namespace Library.Application.Orders.Commands;

public class OrderCreateCommandValidator : AbstractValidator<OrderCreateCommand>
{
    public OrderCreateCommandValidator()
    {
        RuleFor(x => x.Order)
            .NotEmpty()
            .WithMessage("Product can not be empty");
        
        RuleFor(x => x.Order)
            .SetValidator(new OrderCreateDtoValidator());
    }
}