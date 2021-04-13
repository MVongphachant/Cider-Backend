const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    cider: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Cider'
    }
}, {
    timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review