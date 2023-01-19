const methods = require('express').Router();
const fs = require("fs");
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const getNotes = util.promisify(fs.readFile)


const addNotes = () => {
    methods.post('./db.json', (req, res) => {
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
const deleteNotes = () => {
    methods.delete('db.json', (req,res) =>{

    })
 }





// const writeToFile = () => {
//     let dataPath = (path.join(__dirname, "./db/db.json"))
//     fs.writeFile(dataPath, JSON.stringify(notes, null, 4), (err) =>
//         err ? console.error(err) : console.info(`\nData written to ${notes}`)
//     )
// };
// writeToFile(newNote)


module.exports = { getNotes, addNotes, deleteNotes };