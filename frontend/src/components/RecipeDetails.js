import { Link } from "react-router-dom"
import { useRecipesContext } from '../hooks/useRecipesContext' 

const RecipeDetails = ({ recipe }) => {
    const { dispatch } = useRecipesContext()

    const handleClick = async () => {
        const response = await fetch('/api/recipes/' + recipe._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_RECIPE', payload: json})
        }
    }

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
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default RecipeDetails