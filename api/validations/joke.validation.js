const {param} = require('express-validator')

module.exports = {
    getJoke: [
        param('jokeId').isInt()
    ]
}
