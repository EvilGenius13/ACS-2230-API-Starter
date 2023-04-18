const express = require('express')
const movieRoutes = require('./movie.js')
const directorRoutes = require('./director.js')

const router = express.Router()

router.use('/movies', movieRoutes)
router.use('/directors', directorRoutes)

module.exports = router