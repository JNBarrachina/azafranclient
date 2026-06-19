import { useState } from 'react'
import type { Ingredient } from '../../types'

export const AddIngredient = () => {
  const [ingredientName, setIngredientName] = useState('')
  const [ingredientQuantity, setIngredientQuantity] = useState('')

  const postIngredient = () => {
    const body: Omit<Ingredient, 'id'> = {
      name: ingredientName,
      quantity: ingredientQuantity,
    }

    fetch('http://localhost:8080/ingredients', {
      headers: {
        'Content-type': 'application/json',
        authorization: `${localStorage.getItem('accessToken')}`,
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  return (
    <section className="addIngredientBox">
      <form className="addIngredientForm">
        <label htmlFor="ingredientName">Nuevo ingrediente: </label>
        <input
          id="ingredientName"
          onChange={(event) => setIngredientName(event.target.value)}
          type="text"
          placeholder="Nuevo ingrediente"
        />
        <label htmlFor="ingredientQuantity">Cantidad: </label>
        <input
          id="ingredientQuantity"
          onChange={(event) => setIngredientQuantity(event.target.value)}
          type="text"
          placeholder="Cantidad"
        />
      </form>
      <button onClick={postIngredient}>Añadir a tu despensa</button>
    </section>
  )
}
