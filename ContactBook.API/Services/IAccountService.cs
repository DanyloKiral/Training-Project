using ContactBook.API.Models.Dto;

namespace ContactBook.API.Services
{
    public interface IAccountService
    {
        public UserDto GetUser(string email, string pass);
    }
}
