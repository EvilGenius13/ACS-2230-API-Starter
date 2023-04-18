const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
let DirectorSchema = new Schema({
    name: {type: String, required: true},
    date_of_birth: {type: String, required: true},
    movie: [{type: Schema.Types.ObjectId, ref: 'Movie'}]
})

const Director = mongoose.model('Director', DirectorSchema)

module.exports = Director