using Microsoft.EntityFrameworkCore.Storage;
using System.Text.Json;

namespace Data.Test;

public class Tests
{
    private OteContextFactory _factory = null!;
    private OteContext _context = null!;
    private SchoolRepo _repo = null!;
    private IDbContextTransaction _transaction = null!;

    [SetUp]
    public async Task Setup()
    {
        _factory = new OteContextFactory();
        _context = _factory.CreateDbContext([]);
        _repo = new SchoolRepo(_context);
        _transaction = await _context.Database.BeginTransactionAsync();
    }

    [TearDown]
    public async Task Teardown()
    {
        await _transaction.RollbackAsync();
    }

    [Test]
    public void SetupTest()
    {
        if (_repo == null)
            Assert.Fail();
        else
            Assert.Pass();
    }

    [Test]
    public async Task BasicCRUD()
    {

        var dto = new SchoolDto
        {
            SchoolName = "Foo Bar",
            SchoolAcronym = "FB",
            State = "OR",
            City = "Nowhere"
        };

        Assert.That(await _repo.Insert(dto), Is.EqualTo(1));

        var all = await _repo.GetAll();
        Assert.That(all.Count(), Is.EqualTo(1));

        int key = all.First().SchoolID;

        Assert.That(JsonSerializer.Serialize(all.First()), Is.EqualTo(JsonSerializer.Serialize(new SchoolEntity
        {
            SchoolID = key,
            SchoolName = "Foo Bar",
            SchoolAcronym = "FB",
            State = "OR",
            City = "Nowhere"
        })));

        dto = new SchoolDto
        {
            SchoolName = "Baz Quz",
            SchoolAcronym = "BQ",
            State = "OR",
            City = "Nowhere"
        };

        Assert.That(await _repo.Update(key, dto), Is.EqualTo(1));
        Assert.That(all.Count(), Is.EqualTo(1));
        Assert.That(JsonSerializer.Serialize(all.First()), Is.EqualTo(JsonSerializer.Serialize(new SchoolEntity
        {
            SchoolID = key,
            SchoolName = "Baz Quz",
            SchoolAcronym = "BQ",
            State = "OR",
            City = "Nowhere"
        })));

        Assert.That(await _repo.Delete(key), Is.EqualTo(1));
        all = await _repo.GetAll();
        Assert.That(all.Count(), Is.EqualTo(0));
    }
}
