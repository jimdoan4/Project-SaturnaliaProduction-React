const Review = require('../models/Review.js');



const reviewController = {
	index: (req, res) => {
		Review.find()
			.then((reviews) => { // Find all of the reviews from the database
				console.log(reviews);
				res.json(reviews); // send the reviews back to the client
			})
			.catch((err) => { // If there is any error, tell the client something went wrong on the server
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newReview = req.body; // create a new Review, let Mongoose give the default values
			const savedReview = await Review.create(newReview);
			res.json(savedReview); // Send this new review back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
		}
	},
	show: async (req, res) => {
		try {
			const reviewId = req.params.reviewId;
			const review = await Review.findById(reviewId);
			res.json(review);  // Show the information requested
		} catch (err) {
			console.log(err);
			res.json(err); // If there is any error, tell the client something went wrong on the server
		}
	},
	update: async (req, res) => {
		try {
			const reviewId = req.params.reviewId;
			const updatedReview = req.body;
			const savedReview = await Review.findByIdAndUpdate(reviewId, updatedReview);
			res.json(savedReview); // Send the updated review back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
		}
	},
	delete: async (req, res) => {
		try {
			const reviewId = req.params.reviewId; 
			await Review.findByIdAndRemove(reviewId); // Delete the review from the database
			res.json({   // Send back a status tell the client that the delete was successful
				msg: `Successfully Deleted ${reviewId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
		}
	}
};

module.exports = reviewController;
