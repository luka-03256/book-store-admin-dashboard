using Ardalis.SmartEnum;

namespace Library.Domain.Enums;

public class LibraryAction : SmartEnum<LibraryAction>
{
    public static LibraryAction Delete = new(nameof(Delete), 0);
    public static LibraryAction Update = new(nameof(Update), 1);
    public static LibraryAction Create = new(nameof(Create), 2);
    public static LibraryAction Read = new(nameof(Read), 3);
    public static LibraryAction Reload = new(nameof(Reload), 4);
    
    public LibraryAction(string name, int value) : base(name, value)
    {
    }
}