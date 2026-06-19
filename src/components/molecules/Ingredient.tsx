import type { Ingredient as IngredientType } from '../../types'

interface IngredientProps {
  ingredient: IngredientType
  onSelect: (name: string) => void
}

export const Ingredient = ({ ingredient, onSelect }: IngredientProps) => {
  return (
    <section>
      <input
        onClick={() => onSelect(ingredient.name)}
        type="checkbox"
        id={String(ingredient.id)}
        name={ingredient.name}
        value={ingredient.name}
      />
      <label htmlFor={ingredient.name}> {ingredient.name} </label>
    </section>
  )
}
