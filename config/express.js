const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('../api/routes/v1')
const error = require('../api/middlewares/error')
const {requestBody} = require('../api/middlewares/requestBody')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// request body validation middleware
app.use(requestBody)

// v1 routes
app.use('/v1', routes)

// error handler middlewares
app.use(error.notFound)
app.use(error.badRequest)

// error handler
app.use(error.errorHandler)

module.exports = app
