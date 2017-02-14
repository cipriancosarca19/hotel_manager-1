const express = require('express');
const app = express();

// Set up Node to use EJS as the templating engine
app.set('view engine', 'ejs');

// Set up Express to use 'public' as the static assests folder
const path = require('path');

app.use(express.static(
  path.join(__dirname, 'public')
));

app.use(require('./resources'));

app.listen(process.env.PORT || 3000);
