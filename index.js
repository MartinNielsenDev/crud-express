require('dotenv').config()
const app = require('./config/express')

app.listen(process.env.EXPRESS_API_PORT, () => console.log(`Server started on port ${process.env.EXPRESS_API_PORT}`))

module.exports = app
