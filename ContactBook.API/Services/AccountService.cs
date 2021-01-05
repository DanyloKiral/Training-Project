using ContactBook.API.Models.Dto;
using ContactBook.API.Repositories;

namespace ContactBook.API.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;

        public AccountService(IAccountRepository repository)
        {
            _accountRepository = repository;
        }

        public UserDto GetUser(string email, string pass)
        {
            var user = _accountRepository.GetUser(email, pass);

            if (user == null)
            {
                return null;
            }

            var userDto = new UserDto
            {
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role
            };

            return userDto;
        }
    }
}
