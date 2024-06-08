using Library.Domain.Enums;
using MongoDB.Entities;

namespace Library.Domain.Entities;

public class Author : Entity
{
    public string FirstName { get; set; }
    public string DateOfBirth { get; set; }
    public string LastName { get; set; }

    public List<LibraryAction> GetActions()
    {
        return
        [
            LibraryAction.Update,
            LibraryAction.Delete
        ];
    }
}