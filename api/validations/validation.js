const {validationResult} = require('express-validator')
const httpStatus = require('http-status')
const ApiError = require('../models/ApiError')

module.exports.validation = (req, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    } else {
        const err = new ApiError({
            message: 'Bad request',
            statusCode: httpStatus.BAD_REQUEST,
            errors: errors.array().map(err => {
                return {[err.param]: err.msg}
            })
        })
        return next(err)
    }
}
