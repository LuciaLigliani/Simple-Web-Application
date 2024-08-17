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