import {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//components
import RecipeDetails from '../components/RecipeDetails'
import RecipeForm from '../components/RecipeForm'

const Home = () => {
    const [recipes, setRecipes] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('/api/recipes')
            const json = await response.json()

            if (response.ok) {
                setRecipes(json)
            }
            console.log(json)
        }
        fetchRecipes()
    }, [])

    return (
        <div className="home">
            <div className="recipes">
                {recipes && recipes.map((recipe) => (
                    <RecipeDetails key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}

export default Home