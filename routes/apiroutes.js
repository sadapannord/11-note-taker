const router = require('express').Router();
const fs = require("fs");
const util = require('util');
const { v4: uuidv4 } = require('uuid');
// const{getNotes} = require ('../db/getNotes.js')

const getNotes = util.promisify(fs.readFile)

router.get('/notes', (req, res) => {
    getNotes('./db/db.json', "utf8")
      .then((notes) => {
        res.json(JSON.parse(notes))
      })
  })

router.post('/notes', (req, res) => {
    console.log(req.body);

    const { noteTitle, noteText } = req.body;

    if (noteTitle, noteText) {
        const newNote = {
            noteTitle,
            noteText,
            note_id: uuidv4(),
        };
        readAndAppend(newNote, './db.json');
        fs.writeFile
        res.json(`Note added successfully 🚀`);
    } else {
        res.json('Error in adding note')
    }
    // window.location.reload();

});
// }

router.delete('/notes/:note_id', (req, res) => {

})






// const writeToFile = () => {
//     let dataPath = (path.join(__dirname, "./db/db.json"))
//     fs.writeFile(dataPath, JSON.stringify(notes, null, 4), (err) =>
//         err ? console.error(err) : console.info(`\nData written to ${notes}`)
//     )
// };
// writeToFile(newNote)


module.exports = router;
