using Library.Domain.Enums;
using MongoDB.Entities;

namespace Library.Domain.Entities;

public class User : Entity
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public string PhoneNumber { get; set; }

    public List<LibraryAction> GetActions()
    {
        return
        [
            LibraryAction.Update,
            LibraryAction.Delete
        ];
    }
}