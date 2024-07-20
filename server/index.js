const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const mySqlPool = require('./config/db')
const bodyParser = require('body-parser')
const homeRoute = require('./routes/home')
const cardRoute = require('./routes/card')
const categoriesRoute = require('./routes/categories')
const cors = require('cors')

const PORT = process.env.PORT

//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use('/', homeRoute)
app.use('/api/v1/cards', cardRoute)
app.use('/api/v1/categories', categoriesRoute)


mySqlPool.query('select 1')
.then(() => {
    console.log('db is connected');

    app.listen(PORT, () => {
        console.log(`server is running on PORT: ${PORT}`);
    })
})
