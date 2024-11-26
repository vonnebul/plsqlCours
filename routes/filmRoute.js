const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

router.get('/', filmController.getFilm);

module.exports = router;
