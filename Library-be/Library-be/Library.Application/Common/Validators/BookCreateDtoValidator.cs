using FluentValidation;
using FluentValidation.Validators;
using Library.Application.Common.Dto;

namespace Library.Application.Common.Validators;

public class BookCreateDtoValidator : AbstractValidator<BookCreateDto>
{
    public BookCreateDtoValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MinimumLength(5);

        RuleFor(x => x.Publisher)
            .NotEmpty()
            .MinimumLength(5);
        
        RuleFor(x => x.Description)
            .MinimumLength(3)
            .MaximumLength(26);

        RuleFor(x => x.AuthorId)
            .NotEmpty();
        RuleFor(x => x.OrderIds)
            .NotEmpty();
    }
}