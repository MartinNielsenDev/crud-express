const httpStatus = require('http-status')
const ApiError = require('../models/ApiError')
const Joke = require('../models/Joke')

exports.requestBody = (req, res, next) => {
    // validate request body
    if (req.method === 'POST' || req.method === 'PUT') {
        const trimmedUrl = req.url.replace(/^\/+|\/+$/g, '')
        switch (trimmedUrl) {
            case 'v1/jokes':
                return requestBody(req.body, next, Joke)
            default:
                next(new ApiError({
                    message: 'No validation defined for this endpoint',
                    httpStatus: httpStatus.INTERNAL_SERVER_ERROR
                }))
        }
    }
    next()
}

function requestBody(body, next, modelClass) {
    let model = new modelClass()

    for (const property of Object.keys(body)) {
        if (!model.hasOwnProperty(property)) {
            return next(new ApiError({
                message: 'Bad request',
                httpStatus: httpStatus.BAD_REQUEST
            }))
        }
    }
    return next()
}
