import { useState } from 'react'
import { useRecipesContext } from '../hooks/useRecipesContext' 

const RecipeForm = () => {
    const { dispatch } = useRecipesContext()
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const recipe = {title, ingredients, instructions}

        const response = await fetch('/api/recipes/create-recipe', {
            method: 'POST', 
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setIngredients('')
            setInstructions('')
            setError(null)
            dispatch({type: 'CREATE_RECIPE', payload: json})
        }
    }

    return (
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Recipe</h3>

        <label>Recipe Name:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Ingredients:</label>
        <input
          type="text"
          onChange={(e) => setIngredients(e.target.value)}
          value={ingredients}
        />

        <label>Instructions:</label>
        <input
          type="text"
          onChange={(e) => setInstructions(e.target.value)}
          value={instructions}
        />

        <button>Add New Recipe</button>
        {error && <div className="error">{error}</div>}
        
      </form> 
    )
}

export default RecipeForm