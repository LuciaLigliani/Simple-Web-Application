const express = require('express');

const app = express();
const port = 3000;

// Import the calculator router
const calculatorRouter = require('./src/server/routes/calculatorRoutes');

// Basic middleware to parse JSON data
app.use(express.json());

// Routes
app.use('/api', calculatorRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});