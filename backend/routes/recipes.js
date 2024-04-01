const express = require('express')
const {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
} = require ('../controllers/recipeController')
const router = express.Router()

// get all recipes
router.get('/', getRecipes)

// get a single recipe
router.get('/:id', getRecipe)

// post a new recipe
router.post('/create-recipe', createRecipe)

// delete a recipe
router.delete('/:id', deleteRecipe)

// update a recipe
router.patch('/:id', updateRecipe)

module.exports = router