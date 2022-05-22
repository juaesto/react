using backend_jwt.DTOs;
using backend_jwt.Models;

namespace backend_jwt.Services
{
    public interface IUserService
    {
        Task<AuthenticateResponseDto?> Authenticate(AuthenticateRequestDto model);
        IEnumerable<User> GetAll();
        User? GetById(string id);
    }
}
