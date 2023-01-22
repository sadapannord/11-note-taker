const fs = require("fs");
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const getNotes = util.promisify(fs.readFile)
const saveNotes = util.promisify(fs.writeFile)
const deleteNotes = util.promisify(fs.writeFile)
module.exports = {getNotes, saveNotes,deleteNotes};