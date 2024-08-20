// Function to check if a number is prime
isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
  }
  return num > 1;
};


// Function to find the next prime number after a given number
exports.nextPrime = (num) => {
  let prime = parseInt(num) + 1;
  while (true) {
      if (isPrime(prime)) return prime;
      prime++;
  }
};

// Function to validate the input that has to be a number and within the range -10000 to 10000
exports.validateInput = (num1, num2) => {
  // Check if both input are not null
  if (num1 === null || num2 === null) {
    return 'Both numbers are required.';
  }

  // Check if both numbers are numeric
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Both inputs must be numbers.';
  }

  // Check if both numbers are within the range -10000 to 10000
  if (num1 < -10000 || num1 > 10000 || num2 < -10000 || num2 > 10000) {
      return 'Both numbers must be between -10000 and 10000.';
  }

  return null;
}