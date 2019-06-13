const Review = require('../models/Review.js');



const reviewController = {
	index: (req, res) => {
		Review.find()
			.then((reviews) => {
				console.log(reviews);
				res.json(reviews);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newReview = req.body;
			const savedReview = await Review.create(newReview);
			res.json(savedReview);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	show: async (req, res) => {
		try {
			const reviewId = req.params.reviewId;
			const review = await Review.findById(reviewId);
			res.json(review);
		} catch (err) {
			console.log(err);
			res.json(err);
		}
	},
	update: async (req, res) => {
		try {
			const reviewId = req.params.reviewId;
			const updatedReview = req.body;
			const savedReview = await Review.findByIdAndUpdate(reviewId, updatedReview);
			res.json(savedReview);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const reviewId = req.params.reviewId;
			await Review.findByIdAndRemove(reviewId);
			res.json({
				msg: `Successfully Deleted ${reviewId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};

module.exports = reviewController;
