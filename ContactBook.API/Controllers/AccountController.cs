using ContactBook.API.Models.DTO;
using ContactBook.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactBook.API.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private readonly IAccountService accountService;

        public AccountController(IAccountService service)
        {
            accountService = service;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult LogIn([FromBody] LoginDTO loginDTO)
        {
            var userDTO = accountService.GetUser(loginDTO.Email, loginDTO.Pass);

            if (userDTO == null)
            {
                return Unauthorized("Incorrect email or password");
            }

            return Ok(userDTO);
        }
    }
}
