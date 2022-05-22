using Microsoft.AspNetCore.Identity;

namespace backend_jwt.Models
{
    public class User : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
    }
}
