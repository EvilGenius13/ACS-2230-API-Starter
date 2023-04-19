const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const DirectorSchema = new Schema({
    name: {type: String, required: true},
    date_of_birth: {type: String, required: true},
    movies: 
    [{type: Schema.Types.ObjectId, 
    ref: 'Movie'
    }]
})

DirectorSchema.pre('findOne', function (next) {
    this.populate('movies')
    next()
})
DirectorSchema.pre('find', function (next) {
    this.populate('movies')
    next()
})

const Director = mongoose.model('Director', DirectorSchema)
module.exports = Director