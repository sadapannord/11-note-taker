// added this fileURLToPath, not sure if it's necessary
const fs = require('fs');
const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const { getNotes, addNotes } = require('./db/methods.js');
const PORT = 3009;
const app = express();



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('./api/notes', (req, res) => {
  getNotes('db/db.json', "utf8")
    .then((notes) => {
      res.json(JSON.parse(notes))
    })
})


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

//maybe this?
// app.post('/api/notes', (req,res) => {
//   const { title, notes } = req.body;
// })


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
