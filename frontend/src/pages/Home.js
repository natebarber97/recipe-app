import {useEffect, useState } from 'react'
import axios from 'axios'

//components
import RecipeDetails from '../components/RecipeDetails'

const Home = () => {
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const fetchRecipes = async () => {
            await axios.get('/api/recipes')
            .then((res) => {
                setRecipes(res.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
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