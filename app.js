const express = require('express');
// Import the calculator router
const calculatorRouter = require('./src/server/routes/calculatorRoutes');

const app = express();
const port = 3000;

// Basic middleware to parse JSON data
app.use(express.json());

// Routes
app.use('/api', calculatorRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});