const router = require('express').Router();
const fs = require("fs");
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const { getNotes, saveNotes } = require('../db/getNotes.js')


router.get('/notes', (req, res) => {
    getNotes('./db/db.json', "utf8")
        .then((notes) => {
            res.json(JSON.parse(notes))
        })
})

router.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (title, text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        getNotes('./db/db.json', 'utf8').then(notes => {
            let allNotes = JSON.parse(notes)
            allNotes.push(newNote)
            saveNotes('./db/db.json', JSON.stringify(allNotes))
                .then(() => {
                    res.json(newNote);
                })
        })

    } else {
        res.json('Error in adding note')
    }
  

});


// router.delete('/notes/:id', (req, res) => {

//     if (id) {
//         getNotes('./db/db.json', 'utf8').then(notes => {
//             let allNotes = JSON.parse(notes)
//             allNotes.push(newNote)
//             deleteNotes('./db/db.json', JSON.stringify(allNotes))
//                 .then(() => {
//                     res.json(newNote);
//                 })
//         })

//     } else {
//         res.json('Error in deleting note')

// }
// })






// const writeToFile = () => {
//     let dataPath = (path.join(__dirname, "./db/db.json"))
//     fs.writeFile(dataPath, JSON.stringify(notes, null, 4), (err) =>
//         err ? console.error(err) : console.info(`\nData written to ${notes}`)
//     )
// };
// writeToFile(newNote)


module.exports = router;
