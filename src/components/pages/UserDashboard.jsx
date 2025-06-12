import { UserIngredientsList } from "../organisms/UserIngredientsList"
import { AddIngredient } from "../organisms/AddIngredient"

export const UserDashboard = () => {
    return (
        <main>
            <article className="dashboardContainer">
                <h1>Tu despensa</h1>
                <div className="sectionsContainer">
                    <article className="dashboardSection ingredientsSection">
                        <UserIngredientsList />
                        <AddIngredient />
                    </article>
                    <article className="dashboardSection recipesSection">
                        <h2>Tus recetas</h2>
                    </article>
                </div>
            </article>
        </main>
    )
}
