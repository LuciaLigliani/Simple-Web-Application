const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// endpoint to calculate the sum of two numbers plus the first prime number greater than the higher of the two numbers
router.route('/calculate').post(calculatorController.calculate);

module.exports = router;