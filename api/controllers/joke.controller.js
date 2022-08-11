const httpStatus = require('http-status')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

/**
 * Get joke
 * @public
 */
exports.get = async (req, res, next) => {
    const jokeId = parseInt(req.params.jokeId)
    const joke = await prisma.joke.findUnique({
        where: {
            id: jokeId
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

    res.status(httpStatus.CREATED)
    return res.json(createdJoke)
}

/**
 * Replace an existing joke
 * @public
 */
exports.replace = async (req, res, next) => {
    const jokeId = parseInt(req.params.jokeId)
    try {
        const updatedJoke = await prisma.joke.update({
            data: {
                joke: req.body.joke,
                punchline: req.body.punchline
            },
            where: {
                id: jokeId
            }
        })
        res.status(httpStatus.CREATED)
        return res.json(updatedJoke)
    }catch (err) {
        res.status(httpStatus.BAD_REQUEST)
        return res.json()
    }
}

/**
 * Update an existing joke
 * @public
 */
exports.update = (req, res, next) => {
    res.status(httpStatus.METHOD_NOT_ALLOWED)
    return res.json()
}

/**
 * Delete a joke
 * @public
 */
exports.delete = async (req, res, next) => {
    const jokeId = parseInt(req.params.jokeId)
    try {
        await prisma.joke.delete({
            where: {
                id: jokeId
            }
        })
        res.status(httpStatus.NO_CONTENT)
    }catch (err) {
        res.status(httpStatus.NOT_FOUND)
    }

    return res.json()
}
