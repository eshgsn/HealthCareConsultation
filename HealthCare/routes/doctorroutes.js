const express = require('express');
const doctorController = require('../controllers/doctorController');

const router = express.Router();

// Doctor routes
router.post('/register', doctorController.register);
router.post('/login', doctorController.login);

module.exports = router;
