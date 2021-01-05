using System.Collections.Generic;
using System.Linq;

namespace ContactBook.API.Models
{
    public class AccountRepository : IAccountRepository
    {
        private List<User> users;

        public AccountRepository()
        {
            users = new List<User>();
            users.AddRange( new[]
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
            });
        }

        public User GetUser(string email, string pass)
        {            
            return users.FirstOrDefault(u => u.Email == email && u.Password == pass);
        }

    }
}
