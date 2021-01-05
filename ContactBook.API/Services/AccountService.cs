using ContactBook.API.Models;

namespace ContactBook.API.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository accountRepository;

        public AccountService(IAccountRepository repository)
        {
            accountRepository = repository;
        }

        public UserDTO GetUser(string email, string pass)
        {
            var user = accountRepository.GetUser(email, pass);

            if (user == null)
            {
                return null;
            }

            var userDTO = new UserDTO
            {
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role
            };

            return userDTO;
        }
    }
}
