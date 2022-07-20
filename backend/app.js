if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path: 'backend/config/config.env'})
}

const express = require('express')
const app = express()
const connectDatabase = require('./config/database')


connectDatabase()
// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())


module.exports = app