using Library.Domain.Enums;
using MongoDB.Entities;

namespace Library.Domain.Entities;

public class Book : Entity
{
    public string Name { get; set; }
    public string Publisher { get; set; }
    public string Description { get; set; }

    public One<Author> Author { get; set; }

    public Author AuthorEmbeded { get; set; }

    //public One<Category> Category { get; set; }
    //public Category CategoryEmbeded { get; set; }
    public Many<Category, Book> Categories { get; set; }


    [InverseSide] public Many<Order, Book> Orders { get; set; }

    public Book()
    {
        this.InitOneToMany(() => Categories);
        //this.InitManyToMany(() => Categories, category => category.Books);
        this.InitManyToMany(() => Orders, order => order.Books);
    }


    public List<LibraryAction> GetActions()
    {
        return
        [
            LibraryAction.Update,
            LibraryAction.Delete
        ];
    }
}