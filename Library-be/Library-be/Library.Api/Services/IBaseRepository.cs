namespace Library.Api.Services;

public interface IBaseRepository<T>
{
    T GetDetails(T dto);
    void create();

}