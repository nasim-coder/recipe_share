const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: false,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Recipe'
    },
}, {timestamps: true});

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;
