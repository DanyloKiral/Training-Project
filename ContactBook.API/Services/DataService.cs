using ContactBook.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactBook.API.Services
{
    public static class DataService
    {
        public static User GetUser(string email, string pass)
        {
            return AccountRepository.Users.FirstOrDefault(u => u.Email == email && u.Password == pass);
        }
    }
}
