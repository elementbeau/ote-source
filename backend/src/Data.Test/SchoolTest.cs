using Microsoft.EntityFrameworkCore.Storage;
using System.Text.Json;

namespace OTE.Data.Test;

public class Tests : IDisposable
{
    private OteContextFactory _factory = null!;
    private OteContext _context = null!;
    private SchoolRepo _repo = null!;
    private IDbContextTransaction _transaction = null!;

    public Tests()
    {
        _factory = new OteContextFactory();
        _context = _factory.CreateDbContext([]);
        _repo = new SchoolRepo(_context);
        _transaction = _context.Database.BeginTransaction();
    }

    public void Dispose()
    {
        _transaction.Rollback();
    }

    [Fact]
    public void SetupTest()
    {
        if (_repo == null)
            Assert.Fail("_repo is null");
    }

    [Fact]
    public async Task BasicCRUDTest()
    {
        var dto = new SchoolDto
        {
            SchoolName = "Foo Bar",
            SchoolAcronym = "FB",
            State = "OR",
            City = "Nowhere"
        };

        Assert.Equal(1, await _repo.Insert(dto));

        var all = await _repo.GetAll();
        Assert.Single(all);

        int key = all.First().SchoolID;

        Assert.Equal(JsonSerializer.Serialize(new SchoolEntity
        {
            SchoolID = key,
            SchoolName = "Foo Bar",
            SchoolAcronym = "FB",
            State = "OR",
            City = "Nowhere"
        }), JsonSerializer.Serialize(all.First()));

        dto = new SchoolDto
        {
            SchoolName = "Baz Quz",
            SchoolAcronym = "BQ",
            State = "OR",
            City = "Nowhere"
        };

        Assert.Equal(1, await _repo.Update(key, dto));
        Assert.Single(all);
        Assert.Equal(JsonSerializer.Serialize(new SchoolEntity
        {
            SchoolID = key,
            SchoolName = "Baz Quz",
            SchoolAcronym = "BQ",
            State = "OR",
            City = "Nowhere"
        }), JsonSerializer.Serialize(all.First()));

        Assert.Equal(1, await _repo.Delete(key));
        all = await _repo.GetAll();
        Assert.Empty(all);
    }
}

