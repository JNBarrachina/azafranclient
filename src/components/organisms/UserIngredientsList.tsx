import { useState, useEffect, useCallback } from 'react'

import { Ingredient } from '../molecules/Ingredient'
import type { Ingredient as IngredientType } from '../../types'

export const UserIngredientsList = () => {
  const [ingredientsList, setIngredientsList] = useState<IngredientType[]>([])
  const [recipeIngredients, setRecipeIngredients] = useState<string[]>([])

  const getUserIngredients = async () => {
    fetch('http://localhost:8080/ingredients', {
      headers: {
        'Content-type': 'application/json',
        authorization: `${localStorage.getItem('accessToken')}`,
      },
      method: 'GET',
    }).then(async (res) => {
      const data: IngredientType[] = await res.json()
      setIngredientsList(data)
    })
  }

  const saveRecipeIngredients = useCallback((ingredient: string) => {
    setRecipeIngredients((prev) => [...prev, ingredient])
  }, [])

  console.log({ recipeIngredients })

  useEffect(() => {
    getUserIngredients()
  }, [])

  return (
    <section className="ingredientsListBox">
      <h2>Tus ingredientes</h2>
      <form>
        {ingredientsList.length === 0
          ? 'No tienes ingredientes en tu despensa'
          : ingredientsList.map((ingredient) => (
              <Ingredient
                key={ingredient.id}
                ingredient={ingredient}
                onSelect={saveRecipeIngredients}
              />
            ))}
      </form>
      <button>Generar recetas</button>
    </section>
  )
}
