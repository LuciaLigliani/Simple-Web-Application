const calculatorUtil = require('../utils/calculatorUtil');

// function to calculate the sum of two numbers plus the first prime number greater than the higher of the two numbers
exports.calculate = (req, res) => {
  const { num1, num2 } = req.body;

  // Validate the input numbers
  const error = calculatorUtil.validateInput(num1, num2);
  if (error) {
    return res.status(400).json({ error });
  }

  const higherNumber = Math.max(num1, num2);
  const prime = calculatorUtil.nextPrime(higherNumber);
  const result = num1 + num2 + prime;
  res.json({ result });
};