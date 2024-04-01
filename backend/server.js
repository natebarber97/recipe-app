require ('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
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


// connect to db
mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
