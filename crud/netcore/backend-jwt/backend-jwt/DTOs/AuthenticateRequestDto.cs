using System.ComponentModel.DataAnnotations;

namespace backend_jwt.DTOs
{
    public class AuthenticateRequestDto
    {
        [Required]
        public string? Username { get; set; }

        [Required]
        public string? Password { get; set; }
    }
}
