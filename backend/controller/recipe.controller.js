const Recipe = require('../model/recipe');
exports.createRecipe = async (req, res) => {
    // try {
        const { name, description, ingredients, categoryId, cookingInstruction } = req.body;
        const created = await Recipe.create({ name, description, ingredients, categoryId, cookingInstruction });
        res.status(201).send({success: true, msg:'created successfully', data: created})
    // } catch (err) {
    //     res.status(500).send({success: false, msg:'something went wrong', error: err.message})
    // }
}