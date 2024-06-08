using FluentValidation;
using Library.Application.Common.Validators;

namespace Library.Application.Books.Commands;

public class BookCreateCommandValidator : AbstractValidator<BookCreateCommand>
{
    public BookCreateCommandValidator()
    {
        RuleFor(x => x.Book)
            .NotEmpty()
            .WithMessage("Product can not be empty");
        
        RuleFor(x => x.Book)
            .SetValidator(new BookCreateDtoValidator());
    }
}