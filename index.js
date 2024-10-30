const express = require('express');
const app = express();
const port = 9000;

app.use(express.json()); 
app.listen(port, () => {
  console.log(`Server is running `);
});
app.get('/', (req, res) => {
  res.send('welcome to the book API!');
});

const books = [
  { id: 1, title: 'Sample Book', author: 'Author Name', year: 2022 }
];

app.get('/post', (req, res) => {
  res.send(books);
});

app.post('/post', (req, res) => {
  res.send('Book added ');
});

app.put('/post', (req, res) => {
  res.send('Book updated');
});

app.delete('/post', (req, res) => {
  res.send('Book deleted');
});




