using Library.Application.Books.Commands;
using Library.Application.Books.Queries;
using Library.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Entities;

namespace Library.Api.Controllers;

public class BookController : ApiBaseController
{
    [HttpGet]
    public async Task<IActionResult> GetOne([FromQuery] BookDetailsQuery query) => Ok(await Mediator.Send(query));

    [HttpPost]
    public async Task<IActionResult> Create(BookCreateCommand command) => Ok(await Mediator.Send(command));

    [HttpPut]
    public async Task Update(BookUpdateCommand command) => Ok(await Mediator.Send(command));

    [HttpDelete]
    public async Task<string> Delete(string id)
    {
        await DB.DeleteAsync<Book>(id);
        return "Ok!";
    }
}