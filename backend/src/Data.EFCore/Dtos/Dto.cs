namespace OTE.Data.EFCore.Dtos;

public interface Dto<TEntity>
{
    public TEntity Map();
}
