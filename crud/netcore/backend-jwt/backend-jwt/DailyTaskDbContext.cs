using backend_jwt.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backend_jwt
{
    public class DailyTaskDbContext : IdentityDbContext<User>
    {
        public DailyTaskDbContext(DbContextOptions<DailyTaskDbContext> options) : base(options)
        {
            
        }

        public DbSet<DailyTask> DailyTasks { get; set; }
    }
}
