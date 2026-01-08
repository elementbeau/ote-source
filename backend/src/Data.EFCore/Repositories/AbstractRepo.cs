using Microsoft.EntityFrameworkCore;
using OTE.Data.EFCore.Contexts;
using OTE.Data.EFCore.Dtos;
using System.ComponentModel.DataAnnotations;

namespace OTE.Data.EFCore.Repositories;

public abstract class AbstractRepo<TEntity, TDto>(OteContext context)
    where TEntity : class
    where TDto : Dto<TEntity>
{
    private DbSet<TEntity> _dbSet = context.Set<TEntity>();

    public virtual async Task<IEnumerable<TEntity>> GetAll()
    {
        return await _dbSet.ToListAsync();
    }

    public virtual async Task<int> Insert(TDto dto)
    {
        TEntity entity = dto.Map();
        await _dbSet.AddAsync(entity);
        return await context.SaveChangesAsync();
    }

    public virtual async Task<int> Update(object key, TDto dto)
    {
        var dbEntityAsync = _dbSet.FindAsync(key);
        TEntity dtoEntity = dto.Map();
        TEntity? dbEntity = await dbEntityAsync;
        if (dbEntity == null)
            return 0;

        foreach (var property in typeof(TEntity).GetProperties())
        {
            if (property.GetCustomAttributes(typeof(KeyAttribute), false).Any())
                continue;

            property.SetValue(dbEntity, property.GetValue(dtoEntity));
        }

        return await context.SaveChangesAsync();
    }

    public virtual async Task<int> Delete(object key)
    {
        TEntity? dbEntity = await _dbSet.FindAsync(key);
        if (dbEntity == null)
            return 0;

        _dbSet.Remove(dbEntity);

        return await context.SaveChangesAsync();
    }
}
