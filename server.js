// Imports
const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())

// check if token and create req.user
app.use(require('./config/checkToken'))
// ===== ROUTES =====
// Users
app.use('/api/v1/users', require('./routes/api/users'))
const ensureloggedin = require('./config/ensureloggedin')
// Movies
app.use('/api/v1/movies', ensureloggedin, require('./routes/api/movies'))
// Favorites


// ===== PORT =====
const port = 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))