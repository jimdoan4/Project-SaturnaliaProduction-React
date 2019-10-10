const Gallery = require('../models/Gallery.js');

const galleryController = {
	index: (req, res) => {
		Gallery.find()
			.then((gallerys) => { // Find all of the gallerys from the database
				console.log(gallerys);
				res.json(gallerys);  // send the gallerys back to the client
			})
			.catch((err) => {
				console.log(err);  // If there is any error, tell the client something went wrong on the server
			});
	},
	create: async (req, res) => {
		try {
			const newGallery = req.body;  // create a new Gallery, let Mongoose give the default values
			const savedGallery = await Gallery.create(newGallery);
			res.json(savedGallery);  // Send this new gallery back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	show: async (req, res) => {
		try {
			const galleryId = req.params.galleryId;
			const gallery = await Gallery.findById(galleryId);
			res.json(gallery); // Show the information requested
		} catch (err) {
			console.log(err);
			res.json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	update: async (req, res) => {
		try {
			const galleryId = req.params.galleryId;
			const updatedGallery = req.body;
			const savedGallery = await Gallery.findByIdAndUpdate(galleryId, updatedGallery);
			res.json(savedGallery);  // Send the updated gallery back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
		}
	},
	delete: async (req, res) => {
		try {
			const galleryId = req.params.galleryId;
			await Gallery.findByIdAndRemove(galleryId);  // Delete the gallery from the database
			res.json({   // Send back a status tell the client that the delete was successful
				msg: `Successfully Deleted ${galleryId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err); // If there is any error, tell the client something went wrong on the server
		}
	}
};

module.exports = galleryController;
