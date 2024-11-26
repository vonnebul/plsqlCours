const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

router.get('/', filmController.getFilm);
router.get('/ps', filmController.getFilmPS);

module.exports = router;
