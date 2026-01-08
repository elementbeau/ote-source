using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using OTE.Data.EFCore.Contexts;

namespace OTE.Data.EFCore.Factories;

public class OteContextFactory : IDesignTimeDbContextFactory<OteContext>
{
    public OteContext CreateDbContext()
    {
        return CreateDbContext([]);
    }

    public OteContext CreateDbContext(string[] args)
    {
        var configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddUserSecrets("7dd46374-7b55-442e-b4b3-1ae375510d4e")
            .Build();

        var connectionString = configuration.GetConnectionString("OteDb");

        var optionsBuilder = new DbContextOptionsBuilder<OteContext>();
        optionsBuilder.UseNpgsql(connectionString);

        return new OteContext(optionsBuilder.Options);
    }
}
