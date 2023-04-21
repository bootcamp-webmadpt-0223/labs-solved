require('dotenv/config')

require('./db')

const express = require('express')

const app = express()

require('./config')(app)
require('./config/session.config')(app)

app.use('/', require('./routes/index'))

require('./error-handling')(app)

module.exports = app
