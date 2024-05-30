const express = require('express');
const { getGabichat } = require('../controllers/mainController');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.get('/gabichat', auth, getGabichat);

module.exports = router;
