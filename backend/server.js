require ('dotenv').config()

const express = require('express');
const recipeRoutes = require('./routes/recipes')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/recipes', recipeRoutes)

app.listen(process.env.PORT, () => {
    console.log("listening at port", process.env.PORT)
})

