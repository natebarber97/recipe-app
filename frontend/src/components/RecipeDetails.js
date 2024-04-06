import { Link } from "react-router-dom"

const RecipeDetails = ({ recipe }) => {
    return (
        <div className="recipe-details">
            <Link
                to={'/' + recipe._id}
                state={{_id: recipe._id}}>
                <h4>{recipe.title}</h4>
            </Link>
            <p><strong>Ingredients: </strong>{recipe.ingredients}</p>
            <p><strong>Instructions: </strong>{recipe.instructions}</p>
            <p>{recipe.createdAt}</p>
        </div>
    )
}

export default RecipeDetails