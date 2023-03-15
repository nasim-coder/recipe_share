const User = require('../model/user');

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const createdUser = await User.create({ name, email, password });
    res.status(201).send({ success: true, data: createdUser });
}
