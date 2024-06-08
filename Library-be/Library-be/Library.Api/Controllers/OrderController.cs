using Library.Application.Orders.Commands;
using Library.Application.Orders.Queries;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Entities;
using Order = Library.Domain.Entities.Order;

namespace Library.Api.Controllers;

public class OrderController : ApiBaseController
{
    [HttpGet]
    public async Task<IActionResult> GetOne([FromQuery] OrderDetailsQuery query) => Ok(await Mediator.Send(query));

    [HttpPost]
    public async Task<IActionResult> Create(OrderCreateCommand command) => Ok(await Mediator.Send(command));

    [HttpPut]
    public async Task Update(OrderUpdateCommand command) => Ok(await Mediator.Send(command));

    [HttpDelete]
    public async Task<string> Delete(string id)
    {
        await DB.DeleteAsync<Order>(id);
        return "Ok!";
    }
}