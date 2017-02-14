// Our middleware aka our filter

const express = require('express');
const router = express.Router();

router.use('/hotels', require('./controllers/hotels'));


module.exports = router;
