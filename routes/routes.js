const express = require('express');
const { getLogin, postLogin, getRegister, postRegister } = require('../controllers/loginController');

const router = express.Router();

router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/register', getRegister);
router.post('/register', postRegister);

module.exports = router;
