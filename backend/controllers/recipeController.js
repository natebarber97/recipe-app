const Recipe = require ('../models/recipeModel')
const pool = require('../db')

// get all recipes
const getRecipes = async (req, res) => {
    await pool.query("SELECT * FROM \"Recipes\"")
        .then((result) => {
            res.status(200).json(result.rows)
        })
        .catch((err) => {
            res.status(500).json({error: "Internal Server Error"})
            next(err)
        })
}

// get one recipe
const getRecipe = async(req, res, next) => {
    await pool.query(
        "SELECT * FROM \"Recipes\" WHERE _id = $1",
        [req.params.id])
        .then((result) => {
            if (result.rowCount === 0) {
                return res.status(404).send({error: "not found"})
            }
            res.status(200).send(result.rows.at(0))
        })
        .catch((error) => {
            res.status(500).send({error: "internal server error"})
            next(error)
        })
}

const createRecipe = async (req, res, next) => {
    const {title, ingredients, instructions} = req.body
    await pool.query(
        "INSERT INTO \"Recipes\" (title, ingredients, instructions) VALUES ($1, $2, $3)", 
        [title, ingredients, instructions])
        .then((result) => {
            res.status(200).json(result.rows)
        })
        .catch((error) => {
            res.status(500).send({error: "internal server error"})
            next(error)
        })
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