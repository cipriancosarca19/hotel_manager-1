const express = require('express');
const app = express();

// Set up Node to use EJS as the templating engine
app.set('view engine', 'ejs');

// Sets up body-parser to only return relavent data on POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Set up Express to use 'public' as the static assests folder
const path = require('path');

app.use(express.static(
  path.join(__dirname, 'public')
));

app.use(require('./resources'));

app.listen(process.env.PORT || 3000);
