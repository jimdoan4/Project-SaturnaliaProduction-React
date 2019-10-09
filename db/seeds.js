require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User.js');
const Gallery = require('../models/Gallery.js');
const Event = require('../models/Event.js');
const Review = require('../models/Review.js');



const blog = new User({
	title: "DeKalb police: Murder of a Decatur man was ‘hate-motivated",
	description: "The man shot and killed as he walked to a MARTA station in Decatur was harassed by two men about his sexuality one week before the tragic incident.",
	image: "https://www.projectq.us/images/uploads/trey_peters_650-1.jpg"
});


const gallery = new Gallery({
	galleryTitle: "DeKalb police: Murder of a Decatur man was ‘hate-motivated",
	galleryDescription: "The man shot and killed as he walked to a MARTA station in Decatur was harassed by two men about his sexuality one week before the tragic incident.",
	galleryImage: "https://static.toiimg.com/thumb/67228025/Goa-party-new-year.jpg?width=748&height=499",
	galleryImageTwo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F57968313%2F194641189204%2F1%2Foriginal.20190306-145733?h=230&w=460&auto=compress&rect=0%2C50%2C1600%2C800&s=98d2615c08e405f875e0b53fd6d94eb1"
	
});

const event = new Event({
	eventTitle: "Code Red Bars",
	eventDescription: "The man shot and killed as he walked to a MARTA station in Decatur was harassed by two men about his sexuality one week before the tragic incident.",
	eventImage: "https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/900px180"	
});



const review = new Review({
	reviewTitle: "Great bar to hang around",
	reviewDescription: "Dance all night long",
	reviewUser: "Nick Smith",
	reviewImage: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_175/f_auto,q_auto,w_1100/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg"	
});

Event.deleteMany({})	
	.then(() => event.save())	
	.then(() => console.log('Successful Save'))
	
User.deleteMany({})
	.then(() => blog.save())
	.then(() => console.log('Successful Save'))	

Gallery.deleteMany({})
	.then(() => gallery.save())
	.then(() => console.log('Successful Save'))

Review.deleteMany({})
	.then(() => review.save())
	.then(() => console.log('Successful Save'))
	.then(() => mongoose.connection.close());



