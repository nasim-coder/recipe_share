const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: 'Category'
        },
        ingredients: {
            type: {},
            required: true,
        },
        cookingInstruction: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

let Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;