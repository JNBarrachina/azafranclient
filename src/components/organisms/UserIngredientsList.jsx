import { useState, useEffect } from "react"

import { Ingredient } from "../molecules/Ingredient"

export const UserIngredientsList = () => {
    const [ingredientsList, setIngredientsList] = useState([])
    const [recipeIngredients, setRecipeIngredients] = useState([])

    const getUserIngredients = async () => {
        fetch("http://localhost:8080/ingredients", {
            headers: {
                "Content-type": "application/json",
                "authorization": `${localStorage.getItem("accessToken")}`
            },
            method: "GET",
        })

        .then(async (res) => {
            const data = await res.json()
            setIngredientsList(data)
        })
    }

    const saveRecipeIngredients = async (ingredient) => {
        setRecipeIngredients(...recipeIngredients, ingredient)
        console.log(recipeIngredients)
    }

    useEffect(() => {
        getUserIngredients()
    }, [])
    
    return (
        <>
        <section className="ingredientsListBox">
        <h2>Tus ingredientes</h2>
            <form action="">
                {ingredientsList.length == 0 ? "No tienes ingredientes en tu despensa" : ingredientsList.map((ingredient, index) => {
                    return <Ingredient ingredient={ingredient} />
                })}
            </form>
            <button > Generar recetas </button>
            </section>
        </>
    )
}
