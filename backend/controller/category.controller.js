const Category = require('../model/category');
exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
    const created = await Category.create({ name });
    res.status(201).send({ success: true, data: created });
    } catch (err) {
        res.status(500).send({ success: false, error: err.message });
    }
}

exports.categoryList = async (req, res)=> {
    const list = await Category.find({});
    res.status(200).send({ success: true, data: list });
}