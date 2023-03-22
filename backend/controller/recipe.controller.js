const Recipe = require('../model/recipe');
exports.createRecipe = async (req, res) => {
    try {
        const { name, description, ingredients, categoryId, cookingInstruction } = req.body;
        const created = await Recipe.create({ name, description, ingredients, category:categoryId, cookingInstruction });
        res.status(201).send({ success: true, msg: 'created successfully', data: created })
    } catch (err) {
        res.status(500).send({ success: false, msg: 'something went wrong', error: err.message })
    }
}

exports.recipeDetails = async (req, res) => {
    try {
        const { recipeId } = req.query;
    const recipe = await Recipe.findOne({
        id: recipeId,
    });
    res.status(200).send({success: true, data:recipe})
    } catch (err) {
        res.status(500).send({success: false, msg: 'something went wrong', error: err.message})
    }
}

exports.recipeList = async (req, res) => {
    const recipeList = await Recipe.find({});
    res.status(200).send({success: true, data: recipeList})
}