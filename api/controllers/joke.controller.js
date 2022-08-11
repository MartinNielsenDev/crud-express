const httpStatus = require('http-status')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

/**
 * Get joke
 * @public
 */
exports.get = async (req, res, next) => {
    const joke = await prisma.joke.findUnique({
        where: {
            id: req.params.jokeId
        }
    })

    res.status(httpStatus.OK)
    return res.json(joke)
}

/**
 * Get all jokes
 * @public
 */
exports.getAll = async (req, res, next) => {
    const jokes = await prisma.joke.findMany()

    res.status(httpStatus.OK)
    return res.json(jokes)
}

/**
 * Create a new joke
 * @public
 */
exports.create = async (req, res, next) => {
    const createdJoke = await prisma.joke.create({
        data: {
            joke: req.body.joke,
            punchline: req.body.punchline
        }
    })

    res.status(httpStatus.OK)
    return res.json(createdJoke)
}

/**
 * Replace an existing joke
 * @public
 */
exports.replace = (req, res, next) => {
}

/**
 * Update an existing joke
 * @public
 */
exports.update = (req, res, next) => {
}

/**
 * Delete a joke
 * @public
 */
exports.delete = (req, res, next) => {
}
