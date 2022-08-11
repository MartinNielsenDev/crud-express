const express = require('express')
const jokeRoutes = require('./joke.route')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerSpec = swaggerJsdoc({
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express CRUD Api',
            version: '1.0.0'
        }
    },
    apis: ['./api/routes/v1/*.route.js']
})

const router = express.Router()

// swagger ui
router.use('/docs', swaggerUi.serve)
router.get('/docs', swaggerUi.setup(swaggerSpec))

// my routes
router.use('/jokes', jokeRoutes)

module.exports = router
