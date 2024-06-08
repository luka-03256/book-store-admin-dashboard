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
                await DB.InitAsync("Library", MongoClientSettings.FromConnectionString("mongodb+srv://lstefanovic:q9EydIuvCxyprX8p@librarymanagementsystem.6etfxyv.mongodb.net/?retryWrites=true&w=majority&appName=LibraryManagementSystemCluster"));
            })
            .GetAwaiter()
            .GetResult();
        
        return services;
    }
}