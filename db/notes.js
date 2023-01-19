const notes = require('express').Router();
const fs = require("fs");
const util = require('util');

const getNotes = ('api/notes', (req, res)) => { //want to read, put in variables, and return that data
    let parsedNotes;
    fs.readFile('/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            parsedNotes = [].concat(json.parse(data))
            res.json(parsedNotes)
        }
    })
    res.json(parsedNotes);
    // notes.get('/notes', (req, res) => {
    //     readFromFile('./db.json').then((data) => res.json(JSON.parse(data)));

    // });
}

const addNotes = () => {
    notes.post('/', (req, res) => {
        console.log(req.body);

        const { noteTitle, noteText } = req.body;

        const newNote = {
            noteTitle,
            noteText,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db.json');
        res.json(`Note added successfully 🚀`);

    });
}
const deleteNotes = () => { }





const writeToFile = () => {
    let dataPath = (path.join(__dirname, "./db/db.json"))
    fs.writeFile(dataPath, JSON.stringify(notes, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${notes}`)
    )
};
writeToFile(newNote)


module.exports = { getNotes, addNotes, deleteNotes };