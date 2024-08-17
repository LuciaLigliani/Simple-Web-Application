const express = require('express');
const router = express.Router();
const calculatorService = require('../services/calculatorService');

// endpoint to calculate the sum of two numbers plus the first prime number greater than the higher of the two numbers
router.route('/calculate').post(calculatorService.calculate);

module.exports = router;