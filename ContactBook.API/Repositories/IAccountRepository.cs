namespace ContactBook.API.Models
{
    public interface IAccountRepository
    {
        public User GetUser(string email, string pass);
    }
}
