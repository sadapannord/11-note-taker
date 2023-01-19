// added this fileURLToPath, not sure if it's necessary
const fs = require('fs');
const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const PORT = 3000;
const app = express();



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => res.json(notes));
//maybe this?
app.post('/api/notes', (req,res) => {
  const { title, notes } = req.body;
})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
