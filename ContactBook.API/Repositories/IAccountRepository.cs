using ContactBook.API.Models;

namespace ContactBook.API.Repositories
{
    public interface IAccountRepository
    {
        public User GetUser(string email, string pass);
    }
}
