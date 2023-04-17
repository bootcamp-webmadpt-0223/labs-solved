require('dotenv/config')

require('./db')

const express = require('express')

const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')

const app = express()

require('./config')(app)

app.locals.appTitle = `Celebrities and Movies`

const index = require('./routes/index')
app.use('/', index)

require('./error-handling')(app)

module.exports = app
