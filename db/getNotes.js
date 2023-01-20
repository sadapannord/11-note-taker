const fs = require("fs");
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const getNotes = util.promisify(fs.readFile)

module.exports = {getNotes};