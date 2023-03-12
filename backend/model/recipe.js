const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    category_id: {
        type: mongoose.Types.ObjectId,
        ref:'Category'
    },
    ingredients: {
        type: {},
        required: true,
    },
    cooking_instruction: {
        type: String,
        required: true,
    }
});

let Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;