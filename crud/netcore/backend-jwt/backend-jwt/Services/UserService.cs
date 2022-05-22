using backend_jwt.DTOs;
using backend_jwt.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace backend_jwt.Services
{
    public class UserService : IUserService
    {
        private readonly IConfiguration Config;
        private readonly UserManager<User> UserManager;
        private readonly DailyTaskDbContext Context;

        public UserService(IConfiguration config, UserManager<User> userManager, DailyTaskDbContext context)
        {
            Config = config;
            UserManager = userManager;
            Context = context;
        }

        public async Task<AuthenticateResponseDto?> Authenticate(AuthenticateRequestDto model)
        {
            var user = await UserManager.FindByNameAsync(model.Username);

            if (user is null || !await UserManager.CheckPasswordAsync(user, model.Password))
            {
                return null;
            }

            //create claims details based on the user information
            var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, Config["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("UserId", user.Id.ToString()),
                        new Claim("DisplayName", user.NormalizedUserName),
                        new Claim("UserName", user.UserName),
                        new Claim("Email", user.Email)
                    };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Config["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                Config["Jwt:Issuer"],
                Config["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(10),
                signingCredentials: signIn);
            
            return new AuthenticateResponseDto(user, new JwtSecurityTokenHandler().WriteToken(token));
        }

        public IEnumerable<User> GetAll()
        {
            return Context.Users;
        }

        public User? GetById(string id)
        {
            return Context.Users.FirstOrDefault(x => x.Id == id);
        }

        // helper methods

        private string generateJwtToken(List<Claim> claims)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
            var tokenDescriptor = new JwtSecurityToken(
                Config["Jwt:Issuer"],
                Config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(720),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }
    }
}
