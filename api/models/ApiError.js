module.exports = class ApiError {
    constructor({message, statusCode, errors, stackTrace}) {
        this.message = message
        this.statusCode = statusCode
        this.errors = errors
        this.stackTrace = stackTrace
    }
}
