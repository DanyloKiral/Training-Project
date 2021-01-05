using ContactBook.API.Models;
using System.Collections.Generic;
using System.Linq;

namespace ContactBook.API.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly List<User> _users;

        public AccountRepository()
        {
            _users = new List<User>
            {
                new User
                {
                    FullName = "John",
                    Role = "admin",
                    Email = "admin@mail.com",
                    Password = "admin"
                },
                new User
                {
                    FullName = "Tom",
                    Role = "user",
                    Email = "user@mail.com",
                    Password = "user"
                }
            };
        }

        public User GetUser(string email, string pass)
        {            
            return _users.FirstOrDefault(u => u.Email == email && u.Password == pass);
        }

    }
}
