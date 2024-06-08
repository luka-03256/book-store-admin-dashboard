using Library.Api.Services;
using Library.Application.Common.Dto;
using Library.Application.Users.Queries;
using Library.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Entities;

namespace Library.Api.Controllers;

public class UserController(IBaseRepository<UserCreateDto> baseRepository) : ApiBaseController
{
    [HttpGet("Details")]
    public async Task<IActionResult> Details()
    {
        var result = baseRepository.GetDetails(new UserCreateDto("test", "", "","","",""));
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetListPaginationDetails([FromQuery] UserListPaginationDetailsQuery query) =>
        Ok(await Mediator.Send(query));

    // [HttpGet]
    // public string Index() => "Pasta za zube";

    [HttpPost]
    public async Task<string> Create(UserCreateDto dto)
    {
        var entity = new User
        {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            Username = dto.Username,
            Password = dto.Password,
            PhoneNumber = dto.PhoneNumber
        };
        await entity.SaveAsync();
        return "Ok!";
    }

    [HttpPut]
    public async Task<string> Update(UserUpdateDto dto)
    {
        var entity = new User
        {
            ID = dto.Id,
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Email = dto.Email,
            Username = dto.Username,
            Password = dto.Password,
            PhoneNumber = dto.PhoneNumber,
        };

        await entity.SaveAsync();
        return "Ok!";
    }

    [HttpDelete]
    public async Task<string> Delete(string id)
    {
        await DB.DeleteAsync<User>(id);
        return "Ok!";
    }
}