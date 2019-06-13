require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User.js');
const Gallery = require('../models/Gallery.js');
const Event = require('../models/Event.js');
const Review = require('../models/Review.js');



const blog = new User({
	title: "DeKalb police: Murder of gay Decatur man was ‘hate-motivated",
	description: "The gay man shot and killed as he walked to a MARTA station in Decatur was harassed by two men about his sexuality one week before the tragic incident.",
	image: "https://www.projectq.us/images/uploads/trey_peters_650-1.jpg"
});


const gallery = new Gallery({
	galleryTitle: "DeKalb police: Murder of gay Decatur man was ‘hate-motivated",
	galleryDescription: "The gay man shot and killed as he walked to a MARTA station in Decatur was harassed by two men about his sexuality one week before the tragic incident.",
	galleryImage: "https://ichef.bbci.co.uk/news/660/cpsprodpb/CAB3/production/_105419815_fatpug2.jpg",
	galleryImageTwo: "https://vetstreet.brightspotcdn.com/dims4/default/65bbc05/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fc1%2Ff9%2F13fe778446f1b8a4fcbe7146e4a4%2FAP-TVQEZK-ph645080113.jpg"
	
});

const event = new Event({
	eventTitle: "Code Gay Bars",
	eventDescription: "The gay man shot and killed as he walked to a MARTA station in Decatur was harassed by two men about his sexuality one week before the tragic incident.",
	eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3K-oMAJI_OmvmGs-X7N_-xgQnzuXMX9ip6LwENitVHf4DWQzW"	
});
const event1 = new Event({
	eventTitle: "Scarlet Honolulu",
	eventDescription: "The gay man shot and killed as he walked to a MARTA station in Decatur was harassed by two men about his sexuality one week before the tragic incident.",
	eventImage: "http://thebelasco.com/wp-content/uploads/2017/07/8-10-17-LAFC-web.jpg"	
});
const event2 = new Event({
	eventTitle: "Nightlife Guide",
	eventDescription: "The gay man shot and killed as he walked to a MARTA station in Decatur was harassed by two men about his sexuality one week before the tragic incident.",
	eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9QIaz1QzajNZWun4ZCAHzfJ4wS3NbqoKifOQtwBxdbqtO0JcRQ"	
});
const event3 = new Event({
	eventTitle: "Man on Man",
	eventDescription: "The gay man shot and killed as he walked to a MARTA station in Decatur was harassed by two men about his sexuality one week before the tragic incident.",
	eventImage: "https://echomag.com/wp-content/uploads/2018/09/40484278_2207856729243949_4033326040175607808_o.jpg"	
});

const review = new Review({
	reviewTitle: "Great bar to hang around",
	reviewDescription: "Dance all night long",
	reviewUser: "Nick Smith",
	reviewImage: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_175/f_auto,q_auto,w_1100/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg"	
});

Event.deleteMany({})	
	.then(() => event.save())
	.then(() => event1.save())
	.then(() => event2.save())
	.then(() => event3.save())	
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



