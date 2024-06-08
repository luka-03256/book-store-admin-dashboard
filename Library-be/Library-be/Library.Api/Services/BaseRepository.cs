namespace Library.Api.Services;

public class BaseRepository<T> : IBaseRepository<T>
{
    public T GetDetails(T dto)
    {
        return dto;
    }

    public void create()
    {
        // ...
    }
}