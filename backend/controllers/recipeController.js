const Recipe = require ('../models/recipeModel')
const mongoose = require ('mongoose')

// get all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({createdAt: -1})
    res.status(200).json(recipes)
}

// get one recipe
const getRecipe = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Recipe does not exist'})
    }

    const recipe = await Recipe.findById(id)

    if (!recipe) {
        return res.status(404).json({error: 'Recipe does not exist'})
    }

    res.status(200).json(recipe)
}

// create new recipe
const createRecipe = async (req, res) => {
    const {title, ingredients, instructions} = req.body

    try {
        const recipe = await Recipe.create({title, ingredients, instructions})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Recipe does not exist, cannot be deleted'})
    }

    const recipe = await Recipe.findOneAndDelete({_id: id})

    if (!recipe) {
        return res.status(404).json({error: 'Recipe does not exist, cannot be deleted'})
    }

    res.status(200).json(recipe)
}

// update a recipe
const updateRecipe = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Recipe does not exist, cannot be updated'})
    }

    const recipe = await Recipe.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!recipe) {
        return res.status(404).json({error: 'Recipe does not exist, cannot be updated'})
    }

    res.status(200).json(recipe)
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
}