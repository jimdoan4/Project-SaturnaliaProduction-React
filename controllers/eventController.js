const Event = require('../models/Event.js');


const eventController = {
	index: (req, res) => {
		Event.find()
			.then((events) => {
				console.log(events);
				res.json(events);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newEvent = req.body;
			const savedEvent = await Event.create(newEvent);
			res.json(savedEvent);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	show: async (req, res) => {
		try {
			const eventId = req.params.eventId;
			const event = await Event.findById(eventId);
			res.json(event);
		} catch (err) {
			console.log(err);
			res.json(err);
		}
	},
	update: async (req, res) => {
		try {
			const eventId = req.params.eventId;
			const updatedEvent = req.body;
			const savedEvent = await Event.findByIdAndUpdate(eventId, updatedEvent);
			res.json(savedEvent);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const eventId = req.params.eventId;
			await Event.findByIdAndRemove(eventId);
			res.json({
				msg: `Successfully Deleted ${eventId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};

module.exports = eventController;
