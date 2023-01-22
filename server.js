const fs = require('fs');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT||3009;
const app = express();
const apiroutes = require('./routes/apiroutes.js');
const htmlroutes = require('./routes/htmlroutes.js');



// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiroutes);
app.use('/', htmlroutes);



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
