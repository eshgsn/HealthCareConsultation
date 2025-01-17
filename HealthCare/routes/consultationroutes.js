const express = require('express');
const multer = require('multer');
const consultationController = require('../controllers/consultationController');
const verifyToken = require('../middleware/auth');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Consultation routes
router.post('/createRequest', verifyToken, upload.single('image_path'), consultationController.createRequest);
router.put('/:id/update', verifyToken, consultationController.updateStatus);
router.get('/doctors/:id/getRequests', verifyToken, consultationController.getRequestsByDoctorId);

module.exports = router;
