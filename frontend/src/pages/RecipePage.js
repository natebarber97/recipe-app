import {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

//components
import RecipeDetails from '../components/RecipeDetails'

const RecipePage = () => {
    const [recipe, setRecipe] = useState('')
    const location = useLocation()

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch('/api/recipes/' + location.state._id)
            const json = await response.json()
            if (response.ok) {
                setRecipe(json)
            }
            console.log(json)
        }
        fetchRecipe()
    }, [])

    return (
        <div className="RecipePage">
            <div className="recipe">
                <h1>{recipe.title}</h1>
            </div>
        </div>
    )
}

export default RecipePage