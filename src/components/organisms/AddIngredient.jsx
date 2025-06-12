import { useState } from "react"

export const AddIngredient = () => {
    const [ingredientName, setIngredientName] = useState()
    const [ingredientQuantity, setIngredientQuantity] = useState()


    const postIngredient = () => {

        fetch("http://localhost:8080/ingredients", {
            headers: {
                "Content-type": "application/json",
                "authorization": `${localStorage.getItem("accessToken")}`
            },
            method: "POST",
            body: JSON.stringify({name: ingredientName, quantity: ingredientQuantity})
        })

        .then(async (res) => {
            console.log(res)
        })
    }

    return (
        <section className='addIngredientBox'>
            <form action="" className="addIngredientForm">
                <label htmlFor="">Nuevo ingrediente: </label>
                <input onChange={(event) => setIngredientName(event.target.value)} type="text" name="" id="" placeholder='Nuevo ingrediente'/>
                <label htmlFor="">Cantidad: </label>
                <input onChange={(event) => setIngredientQuantity(event.target.value)} type="text" name="" id="" placeholder='Cantidad'/>
            </form>
            <button onClick={postIngredient}>Añadir a tu despensa</button>
        </section>
    )
}
