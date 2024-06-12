using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using MongoDB.Entities;


namespace Library.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        Task.Run(async () =>
            {
                await DB.InitAsync("Library", MongoClientSettings.FromConnectionString("mongodb+srv://<user>:<password>@librarymanagementsystem.6etfxyv.mongodb.net/?retryWrites=true&w=majority&appName=<cluster-name>"));
            })
            .GetAwaiter()
            .GetResult();
        
        return services;
    }
}
