const express = require('express')
const router = express.Router();

const Movie = require('../models/movie')
const Director = require('../models/director')

// All movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find({}).populate('director');
    return res.json({movies});
  } catch (err) {
    throw err.message;
  }
});

// Add movie
router.post('/', async (req, res) => {
  const {title, year, director} = req.body;
  const newMovie = new Movie({
    title,
    year,
    director
  })

  newMovie.save()
    .then(movie => {
      res.json({msg: 'Movie added successfully'})
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = router