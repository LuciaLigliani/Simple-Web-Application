const express = require('express');
const router = express.Router();


// Function to check if a number is prime
function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
  }
  return num > 1;
}


// Function to find the next prime number after a given number
function nextPrime(n) {
  let prime = n + 1;
  while (true) {
      if (isPrime(prime)) return prime;
      prime++;
  }
}


// endpoint to calculate the sum of two numbers and the next prime number
router.route('/calculate').post((req, res) => {
  const { num1, num2 } = req.body;
  const higherNumber = Math.max(num1, num2);
  const prime = nextPrime(higherNumber);
  const result = num1 + num2 + prime;
  res.json({ result });
})


module.exports = router;