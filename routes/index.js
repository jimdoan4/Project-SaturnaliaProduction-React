const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');
const userController = require('../controllers/userController');
const reviewController = require('../controllers/reviewController');
const eventController = require('../controllers/eventController');
const galleryController = require('../controllers/galleryController')

 router.get('/', appController.index);

router.get('/users/', userController.index);
router.post('/users/', userController.create);
router.get('/users/:userId/', userController.show);
router.put('/users/:userId/', userController.update);
router.delete('/users/:userId/', userController.delete);

router.get('/reviews/', reviewController.index);
router.post('/reviews/', reviewController.create);
router.get('/reviews/:reviewId/', reviewController.show);
router.put('/reviews/:reviewId/', reviewController.update);
router.delete('/reviews/:reviewId/', reviewController.delete);

router.get('/events/', eventController.index);
router.post('/events/', eventController.create);
router.get('/events/:eventId/', eventController.show);
router.put('/events/:eventId/', eventController.update);
router.delete('/events/:eventId/', eventController.delete);

router.get('/gallerys/', galleryController.index);
router.post('/gallerys/', galleryController.create);
router.get('/gallerys/:galleryId/', galleryController.show);
router.put('/gallerys/:galleryId/', galleryController.update);
router.delete('/gallerys/:galleryId/', galleryController.delete);


module.exports = router;
