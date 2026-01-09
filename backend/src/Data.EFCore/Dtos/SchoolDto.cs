using System.ComponentModel.DataAnnotations;
using OTE.Data.EFCore.Entities;

namespace OTE.Data.EFCore.Dtos;

/// <summary>`IDto` corresponding to `SchoolEntity`.</summary>
public class SchoolDto : IDto<SchoolEntity>
{
    [MaxLength(255)]
    public string SchoolName { get; set; } = string.Empty;

    [MaxLength(10)]
    public string SchoolAcronym { get; set; } = string.Empty;

    [MaxLength(2)]
    [MinLength(2)]
    public string? State { get; set; }

    [MaxLength(255)]
    public string? City { get; set; }

    public SchoolEntity Map()
    {
        return new SchoolEntity
        {
            SchoolID = 0,
            SchoolName = SchoolName,
            SchoolAcronym = SchoolAcronym,
            State = State,
            City = City
        };
    }
}
