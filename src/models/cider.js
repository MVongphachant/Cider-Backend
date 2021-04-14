const mongoose = require('mongoose')

const ciderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    cidery: {
        type: String,
        required: true,
        trim: true
    },
    ABV: Number,
    price: Number,
    tags: String,
    seasonal: Boolean
})

ciderSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'cider'
})

const Cider = mongoose.model('Cider', ciderSchema)

module.exports = Cider