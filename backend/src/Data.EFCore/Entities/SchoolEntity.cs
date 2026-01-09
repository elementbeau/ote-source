using System.ComponentModel.DataAnnotations;

namespace OTE.Data.EFCore.Entities;

/// <summary>Entity type for representing schools.</summary>
public class SchoolEntity
{
    [Key]
    public int SchoolID { get; set; }

    [MaxLength(255)]
    public string SchoolName { get; set; } = string.Empty;

    [MaxLength(10)]
    public string SchoolAcronym { get; set; } = string.Empty;

    [MaxLength(2)]
    [MinLength(2)]
    public string? State { get; set; }

    [MaxLength(255)]
    public string? City { get; set; }
}
