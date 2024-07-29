const express = require('express');
const morgan  = require('morgan')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT

const RouterCategories = require('./routes/categories')

//middleware
app.use(express.json())
app.use(morgan("dev"))

//routing
app.use('/api/v1/categories', RouterCategories)


app.listen( PORT, ()=> {
    console.log(`this server running on server http://localhost:${PORT}`);
})