const Rating = require('../model/rating');

exports.createRating = async (req, res) => {
    const { rating, comment, recipeId, userId } = req.body;
    const createdRating = await Rating.create({ rating, comment, recipeId, userId });
    res.status(201).send({ success: true, data: createdRating });
}

exports.ratingList = async (req, res) => {
    const ratingList = await Rating.find().populate('recipeId');
    res.status(200).send({ success: true, data: ratingList });
}

exports.ratingDetails = async (req, res) => {
    const { ratingId } = req.query;
    const ratingDetail = await Rating.findOne(ratingId);
    res.status(200).send({ success: true, data: ratingDetail });
}