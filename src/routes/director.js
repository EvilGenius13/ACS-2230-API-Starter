const express = require('express');
const router = express.Router();
const Director = require('../models/director');

// Get all directors
router.get('/', async (req, res) => {
  try {
    
    const directors = await Director.find({}).populate('movies');
    return res.json({directors});
  } catch (err) {
    throw err.message;
  }
});

// Get a director by id
router.get('/:directorId', async (req, res) => {
  try {
    const director = await Director.findById(req.params.directorId);
    return res.json({director});
  } catch (err) {
    throw err.message;
  }
});

// Create a new director
router.post('/', async (req, res) => {
  try {
    const director = new Director(req.body);
    const savedDirector = await director.save();
    return res.json({director: savedDirector});
  } catch (err) {
    throw err.message;
  }
});

// Update a director by id
router.put('/:directorId', async (req, res) => {
  try {
    const updatedDirector = await Director.findByIdAndUpdate(req.params.directorId, req.body, {new: true});
    return res.json({director: updatedDirector});
  } catch (err) {
    throw err.message;
  }
});

// Delete a director by id
router.delete('/:directorId', async (req, res) => {
  try {
    const deletedDirector = await Director.findByIdAndDelete(req.params.directorId);
    return res.json({
      message: 'Successfully deleted',
      director: deletedDirector
    });
  } catch (err) {
    throw err.message;
  }
});

module.exports = router;

