const express = require('express');
const patientController = require('../controllers/patientController');

const router = express.Router();

// Patient routes
router.post('/register', patientController.register);
router.post('/login', patientController.login);

module.exports = router;
