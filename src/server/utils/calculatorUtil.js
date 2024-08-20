// Function to check if a number is prime
isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
  }
  return num > 1;
};


// Function to find the next prime number after a given number
exports.nextPrime = (num) => {
  let prime = num + 1;
  while (true) {
      if (isPrime(prime)) return prime;
      prime++;
  }
};

// Function to validate the input that has to be a number and within the range -99999 to 99999
exports.validateInput = (num1, num2) => {
  // Check if both input are not null
  if (num1 === null || num2 === null) {
    return 'Both numbers are required.';
  }

  // Check if both numbers are numeric
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Both inputs must be numbers.';
  }

  // Check if both numbers are within the range -99999 to 99999
  if (num1 < -9999 || num1 > 9999 || num2 < -99999 || num2 > 99999) {
      return 'Both numbers must be between -99999 and 99999.';
  }

  return null;
}