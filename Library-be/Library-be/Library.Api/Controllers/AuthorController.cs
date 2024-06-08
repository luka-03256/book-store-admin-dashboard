using Library.Api.Services;
using Library.Application.Authors.Queries;
using Library.Application.Common.Dto;
using Library.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Entities;

namespace Library.Api.Controllers;

public class AuthorController(IBaseRepository<AuthorCreateDto> baseRepository) : ApiBaseController
{
    [HttpGet("Details")]
    public async Task<IActionResult> Details()
    {
        var result = baseRepository.GetDetails(new AuthorCreateDto("test", "", ""));
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetListPaginationDetails([FromQuery] AuthorListPaginationDetailsQuery query) =>
        Ok(await Mediator.Send(query));

    // [HttpGet]
    // public string Index() => "Pasta za zube";
    
    
    
    
    [HttpPost]
    public async Task<string> Create(AuthorCreateDto dto)
    {
        var entity = new Author
        {
            FirstName = dto.FirstName,
            DateOfBirth = dto.DateOfBirth,
            LastName = dto.LastName
        };
        await entity.SaveAsync();
        return "Ok!";
    }

    [HttpPut]
    public async Task<string> Update(AuthorUpdateDto dto)
    {
        var entity = new Author
        {
            ID = dto.Id,
            FirstName = dto.FirstName,
            DateOfBirth = dto.DateOfBirth,
            LastName = dto.LastName
        };

        await entity.SaveAsync();
        return "Ok!";
    }

    [HttpDelete]
    public async Task<string> Delete(string id)
    {
        await DB.DeleteAsync<Author>(id);
        return "Ok!";
    }
}