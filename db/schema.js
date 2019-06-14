const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
	title: String,
	description: String,
	image: String,
});

const GallerySchema = new Schema({
	galleryTitle: String,
	galleryDescription: String,
	galleryImage: String,
	galleryImageTwo: String,
});

const EventSchema = new Schema({
	eventTitle: String,
	eventDescription: String,
	eventImage: String,
});

const ReviewSchema = new Schema({
	reviewTitle: String,
	reviewDescription: String,
	reviewUser: String,
	reviewImage: String,
});

module.exports = {
	UserSchema: UserSchema,
	GallerySchema: GallerySchema,
	EventSchema: EventSchema,
	ReviewSchema: ReviewSchema

};


