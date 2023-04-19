const express = require('express')
const router = express.Router();

const Movie = require('../models/movie')
const Director = require('../models/director')

// All movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find({});
    return res.json({movies});
  } catch (err) {
    throw err.message;
  }
});

// Add movie
router.post('/', async (req, res) => {
  const {title, year, director} = req.body;
  
  // Find the director object by ID
  const directorObj = await Director.findById(director);

  const newMovie = new Movie({
    title,
    year,
    director: directorObj // Assign the director object to the movie
  })

  newMovie.save()
    .then(async (movie) => {
      // Add the movie to the director's movies array
      directorObj.movies.push(movie._id);
      await directorObj.save();

      res.json({msg: 'Movie added successfully'})
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router