using Library.Api.Services;
using Library.Application.Categories.Queries;
using Library.Application.Common.Dto;
using Library.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Entities;

namespace Library.Api.Controllers;

public class CategoryController(IBaseRepository<CategoryCreateDto> baseRepository) : ApiBaseController
{
    [HttpGet("Details")]
    public async Task<IActionResult> Details()
    {
        var result = baseRepository.GetDetails(new CategoryCreateDto("test"));
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetListPaginationDetails([FromQuery] CategoryListPaginationDetailsQuery query) =>
        Ok(await Mediator.Send(query));

    // [HttpGet]
    // public string Index() => "Pasta za zube";

    [HttpPost]
    public async Task<string> Create(CategoryCreateDto dto)
    {
        var entity = new Category
        {
            Name = dto.Name
        };
        await entity.SaveAsync();
        return "Ok!";
    }

    [HttpPut]
    public async Task<string> Update(CategoryUpdateDto dto)
    {
        var entity = new Category
        {
            ID = dto.Id,
            Name = dto.Name
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