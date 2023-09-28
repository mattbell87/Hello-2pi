const express = require('express');
const app = express();
const port = 3000;

// Define a route that serves the "Hello 2pi" HTML page
app.get('/', (req, res) => {
  res.send('<html><body><h1>Hello 2pi</h1></body></html>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});