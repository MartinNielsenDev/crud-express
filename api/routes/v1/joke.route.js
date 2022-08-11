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
     * /test:
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
    .put(controller.replace)
    .patch(controller.update)
    .delete(controller.delete)

module.exports = router
