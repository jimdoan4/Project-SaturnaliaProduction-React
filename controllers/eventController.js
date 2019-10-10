const Event = require('../models/Event.js');


const eventController = {
	index: (req, res) => {
		Event.find()
			.then((events) => {  // Find all of the events from the database
				console.log(events);
				res.json(events);  // send the events back to the client
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	},
	create: async (req, res) => {
		try {
			const newEvent = req.body;  // create a new Event, let Mongoose give the default values
			const savedEvent = await Event.create(newEvent);
			res.json(savedEvent);  // Send this new event back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	show: async (req, res) => {
		try {
			const eventId = req.params.eventId;
			const event = await Event.findById(eventId);
			res.json(event);  // Show the information requested
		} catch (err) {
			console.log(err);
			res.json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	update: async (req, res) => {
		try {
			const eventId = req.params.eventId;
			const updatedEvent = req.body;
			const savedEvent = await Event.findByIdAndUpdate(eventId, updatedEvent);
			res.json(savedEvent);  // Send the updated event back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	delete: async (req, res) => {
		try {
			const eventId = req.params.eventId;
			await Event.findByIdAndRemove(eventId); // Delete the event from the database
			res.json({   // Send back a status tell the client that the delete was successful
				msg: `Successfully Deleted ${eventId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}  
	}
};

module.exports = eventController;
