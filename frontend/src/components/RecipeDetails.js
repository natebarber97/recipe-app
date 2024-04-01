import RecipePage from "../pages/RecipePage"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"

const RecipeDetails = ({ recipe }) => {
    const navigate = useNavigate()
    const toRecipePage = () => {
        navigate('/' + recipe._id, {state: {_id: recipe._id}})
    }
    return (
        <div className="recipe-details">
            <h4>{recipe.title}</h4>
            <p><strong>Ingredients: </strong>{recipe.ingredients}</p>
            <p><strong>Instructions: </strong>{recipe.instructions}</p>
            <p>{recipe.createdAt}</p>
            <p className="lead">
                <button className="btn btn-success"
                    onClick={() => {toRecipePage()}}>Go to Recipe
                </button>
            </p>
        </div>
    )
}

export default RecipeDetails