using Library.Domain.Enums;
using MongoDB.Entities;

namespace Library.Domain.Entities;

public class Order : Entity
{
    public string UserComment { get; set; }

    public One<User> User { get; set; }
    public User UserEmbeded { get; set; }


    // one order has multiple books
    [OwnerSide] public Many<Book, Order> Books { get; set; }

    public Order()
    {
        //this.InitOneToMany(() => Users);
        this.InitManyToMany(() => Books, book => book.Orders);
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