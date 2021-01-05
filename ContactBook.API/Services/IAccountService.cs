using ContactBook.API.Models;

namespace ContactBook.API.Services
{
    public interface IAccountService
    {
        public UserDTO GetUser(string email, string pass);
    }
}
