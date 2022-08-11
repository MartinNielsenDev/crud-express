const httpStatus = require('http-status')
const ApiError = require('../models/ApiError')

/**
 * Error handler.
 * @public
 */
const handler = (err, req, res, next) => {
    const response = {
        message: err.message || httpStatus[err.statusCode],
        statusCode: err.statusCode,
        errors: err.errors,
        stackTrace: err.stackTrace
    }

    res.status(err.statusCode)
    res.json(response)
}
exports.errorHandler = handler

/**
 * If error is not an instanceOf ApiError, convert it.
 * @public
 */
exports.converter = (err, req, res, next) => {
    let error = err

    if (!(err instanceof ApiError)) {
        error = new ApiError({
            message: err.message,
            statusCode: err.statusCode,
            errors: err.errors,
            stackTrace: err.stackTrace
        })
    }

    return handler(error, req, res)
}

/**
 * Catch 404 and forward to error handler
 * @public
 */
exports.notFound = (req, res, next) => {
    const err = new ApiError({
        message: 'Not found',
        statusCode: httpStatus.NOT_FOUND
    })

    return handler(err, req, res)
}

/**
 * Catch 400 and forward to error handler
 * @public
 */
exports.badRequest = (req, res, next) => {
    const err = new ApiError({
        message: 'Bad request',
        statusCode: httpStatus.BAD_REQUEST
    })
    return handler(err, req, res)
}
