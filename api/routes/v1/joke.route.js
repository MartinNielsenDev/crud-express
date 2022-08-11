const express = require('express')
const controller = require('../../controllers/joke.controller')
const jokeValidation = require('../../validations/joke.validation')

const router = express.Router()

router.route('/')
    .get(controller.getAll)
    .post(controller.create)

router
    .route('/:jokeId')
    /**
     * @swagger
     * /v1/jokes/{jokeId}:
     *   get:
     *   summary: Get joke by id
     *   description: Get a joke by id
     *   parameters:
     *   - name: jokeId
     *   responses:
     *     200:
     *       description: Returns the joke
     */
    .get(jokeValidation.getJoke, controller.get)
    .put(jokeValidation.getJoke, controller.replace)
    .delete(jokeValidation.getJoke, controller.delete)

module.exports = router
