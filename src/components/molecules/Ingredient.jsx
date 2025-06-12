import React from 'react'

export const Ingredient = ({ingredient}) => {

    return (
        <section> 
            <input onClick={()=> saveRecipeIngredients(ingredient.name)} type="checkbox" id={ingredient.id} name="ingredient${index}" value={ingredient.name} />
            <label htmlFor={ingredient.name}> {ingredient.name} </label>
        </section>
    )
}
