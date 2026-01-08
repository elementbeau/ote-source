using Microsoft.EntityFrameworkCore;
using OTE.Data.EFCore.Entities;

namespace OTE.Data.EFCore.Contexts;

public class OteContext(DbContextOptions<OteContext> options) : DbContext(options)
{
    public DbSet<SchoolEntity> Schools { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.HasDefaultSchema("public");
    }
}
