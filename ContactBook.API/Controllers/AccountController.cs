using ContactBook.API.Models;
using ContactBook.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactBook.API.Controllers
{
    public class AccountController : Controller
    {
        public User LogIn(string email, string pass)
        {
            var user = DataService.GetUser(email, pass);
            
            return user;
        }
    }
}
