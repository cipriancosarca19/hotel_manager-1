const express = require('express');
const app = express();

// Set up Node to use EJS as the templating engine
app.set('view engine', 'ejs');

// Sets up body-parser to only return relavent data on POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const path = require('path');

// Set up method overrride to allow HTML forms to perform PUT and DELETE requests
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Set up Express to use 'public' as the static assests folder
app.use(express.static(
  path.join(__dirname, 'public')
));

app.use(require('./resources'));

app.listen(process.env.PORT || 3000);
