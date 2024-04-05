import {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const RecipePage = () => {
    const [recipe, setRecipe] = useState('')
    const location = useLocation()

    useEffect(() => {
        const fetchRecipe = async () => {
            await axios.get('/api/recipes/' + location.state._id)
            .then(response => {
                const recipe = response.data
                if (recipe.length === 0) {
                    return Promise.reject(new Error("Empty list"))
                }
                console.log(response.data)
                setRecipe(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
        }
        fetchRecipe()
    }, [location.state])

    return (
        <div className="RecipePage">
            <div className="recipe">
                <h1>Recipe Title: {recipe.title}</h1>
            </div>
        </div>
    )
}

export default RecipePage