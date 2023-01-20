// added this fileURLToPath, not sure if it's necessary
const fs = require('fs');
const express = require('express');
const path = require('path');
// const notes = require('./db/db.json');
// const { getNotes, addNotes } = require('./db/methods.js');
// const methodsRouter = require ('./db/methods.js')
const PORT = process.env.PORT||3009;
const app = express();
// const index = require('./public/assets/js/index.js')
const apiroutes = require('./routes/apiroutes.js');
const htmlroutes = require('./routes/htmlroutes.js');



// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiroutes);
app.use('/', htmlroutes);
// app.use('./db/db.json', methodsRouter)

// index.get('api/notes', (req, res) => {
//   getNotes('db/db.json', "utf8")
//     .then((notes) => {
//       res.json(JSON.parse(notes))
//     })
// })

// index.post('api/notes', (req, res) => {
//   saveNote('db/db.json', "utf8")
//   .then ((notes) => {
//     res.json(JSON.parse(notes))
//   })

// })
// app.get('/api/notes', (req, res) => {
//   getNotes('db/db.json', "utf8")
//     .then((notes) => {
//       res.json(JSON.parse(notes))
//     })
// })

//maybe this?
// app.post('/api/notes', (req,res) => {
//   const { title, notes } = req.body;
// })


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
