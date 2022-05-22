using backend_netcore.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_netcore
{
	public class DailyTaskDbContext : DbContext
	{
		public DailyTaskDbContext(DbContextOptions options) : base(options)
		{

		}

		public DbSet<DailyTask> DailyTasks { get; set; }
	}
}
