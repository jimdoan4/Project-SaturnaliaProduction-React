const Gallery = require('../models/Gallery.js');

const galleryController = {
	index: (req, res) => {
		Gallery.find()
			.then((gallerys) => {
				console.log(gallerys);
				res.json(gallerys);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newGallery = req.body;
			const savedGallery = await Gallery.create(newGallery);
			res.json(savedGallery);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	show: async (req, res) => {
		try {
			const galleryId = req.params.galleryId;
			const gallery = await Gallery.findById(galleryId);
			res.json(gallery);
		} catch (err) {
			console.log(err);
			res.json(err);
		}
	},
	update: async (req, res) => {
		try {
			const galleryId = req.params.galleryId;
			const updatedGallery = req.body;
			const savedGallery = await Gallery.findByIdAndUpdate(galleryId, updatedGallery);
			res.json(savedGallery);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const galleryId = req.params.galleryId;
			await Gallery.findByIdAndRemove(galleryId);
			res.json({
				msg: `Successfully Deleted ${galleryId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};

module.exports = galleryController;
