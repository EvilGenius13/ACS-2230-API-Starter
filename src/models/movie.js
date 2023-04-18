const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const MovieSchema = new Schema({
  title: String,
  year: Number,
  director: {
    type: Schema.Types.ObjectId,
    ref: 'Director',
    required: true
  }
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
