using OTE.Data.EFCore.Contexts;
using OTE.Data.EFCore.Dtos;
using OTE.Data.EFCore.Entities;

namespace OTE.Data.EFCore.Repositories;

public class SchoolRepo(OteContext context) : AbstractRepo<SchoolEntity, SchoolDto>(context)
{}
