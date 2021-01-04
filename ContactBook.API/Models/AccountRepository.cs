using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactBook.API.Models
{
    public static class AccountRepository
    {
        public static List<User> Users;

        static AccountRepository()
        {
            Users = new List<User>();
            Users.AddRange( new[]
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

    }
}
