using backend_netcore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend_netcore.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class DailyTaskController : ControllerBase
	{
		private readonly ILogger<DailyTaskController> Logger;

		private readonly DailyTaskDbContext Context;

		public DailyTaskController(ILogger<DailyTaskController> logger, DailyTaskDbContext context)
		{
			Logger = logger;
			Context = context;
		}

		[HttpGet]
		public async Task<ActionResult<List<DailyTask>>> Get()
		{
			return await Context.DailyTasks.ToListAsync();
		}

		[HttpGet("{id:int}")]
		public async Task<ActionResult<DailyTask>> Get(int id)
		{
			return await Context.DailyTasks.FirstOrDefaultAsync(x => x.Id == id);
		}

		[HttpPost]
		public async Task<ActionResult> Post(DailyTask task)
		{
			Context.Add(task);
			await Context.SaveChangesAsync();
			return Ok();
		}

		[HttpPut("{id:int}")]
		public async Task<ActionResult> Put(DailyTask task, int id)
		{
			if (task.Id != id)
				return BadRequest("El id de la tarea no coincide con el id de la URL");

			var existe = await Context.DailyTasks.AnyAsync(x => x.Id == id);
			if (!existe)
				return NotFound();

			Context.Update(task);
			await Context.SaveChangesAsync();
			return Ok();
		}

		[HttpDelete("{id:int}")]
		public async Task<ActionResult> Delete(int id)
		{
			var exists = await Context.DailyTasks.AnyAsync(x => x.Id == id);
			if (!exists)
				return NotFound();

			Context.Remove(new DailyTask() { Id = id });
			await Context.SaveChangesAsync();

			return Ok();
		}
	}
}
