using Library.Domain.Enums;
using MongoDB.Entities;

namespace Library.Domain.Entities;

public class Category : Entity
{
    public string Name { get; set; }

    public List<LibraryAction> GetActions()
    {
        return
        [
            LibraryAction.Update,
            LibraryAction.Delete
        ];
    }
}