const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.listen(port, () => {
  console.log(`Server is running `);
});
app.get('/book', (req, res) => {
    res.send('Welcome to the Book API');
  });
