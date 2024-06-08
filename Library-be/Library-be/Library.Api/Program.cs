using FluentValidation.AspNetCore;
using Library.Api.Configurations;
using Library.Api.Filters;
using Library.Api.Services;
using Library.Application;
using Library.Application.Common.Dto;
using Library.Infrastructure;
using Microsoft.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(options => options.Filters.Add<ApiExceptionFilterAttribute>());
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddFluentValidationClientsideAdapters();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddApplication();
builder.Services.AddInfrastructure();

builder.Services.AddScoped<IBaseRepository<UserCreateDto>, BaseRepository<UserCreateDto>>();
builder.Services.AddScoped<IBaseRepository<AuthorCreateDto>, BaseRepository<AuthorCreateDto>>();
builder.Services.AddScoped<IBaseRepository<CategoryCreateDto>, BaseRepository<CategoryCreateDto>>();
builder.Services.AddScoped<IBaseRepository<OrderDetailsDto>, BaseRepository<OrderDetailsDto>>();
builder.Services.AddScoped<IBaseRepository<BookDetailsDto>, BaseRepository<BookDetailsDto>>();
builder.Services.AddScoped<IMainRepository, MainOneRepository>();
builder.Services.AddScoped<IMainRepository, MainTwoRepository>();

var corsConfiguration = new CorsConfiguration();
builder.Configuration
    .GetSection("CorsConfiguration")
    .Bind(corsConfiguration);

builder.Services.AddCors(options => options.AddPolicy("AllowOrigins",
    x => x.WithMethods("GET",
            "POST",
            "PATCH",
            "DELETE",
            "OPTIONS",
            "PUT")
        .WithHeaders(HeaderNames.Accept,
            HeaderNames.ContentType,
            HeaderNames.Authorization,
            HeaderNames.XRequestedWith,
            "x-signalr-user-agent")
        .AllowCredentials()
        .WithOrigins(corsConfiguration.AllowedOrigins!)));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowOrigins");
app.UseHttpsRedirection();
app.MapControllers();

app.Run();