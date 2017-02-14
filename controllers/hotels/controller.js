const Hotel = require('../../models/hotel');
let controller = {};

controller.index = (req, res) => {
  // Automatically looks for views/foldername/filename.ejs
  Hotel
  .findAll()
  .then((hotel_data) => {
    res.render('hotels/index', {
      hotels: hotel_data
    })
  });
};

controller.new = (req, res) => {
  res.render('hotels/new');
};

controller.show = (req, res) => {
    res.render('hotels/show')
};

controller.create = (req, res) => {
  // Grabs the json from the form submission, goes over to the model, and appends the data to the DB
  Hotel
  .save(req.body.hotel)
  .then(() => {
    res.redirect('/hotels');
  })
  // Redirects us back to /hotels
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
};

controller.update = (req, res) => {
  Hotel
  .update(req.body.hotel, req.params.id)
  .then(() => {
    res.redirect('/hotels');
  })
  .catch((err) => {
    res
    .status(400)
    .send(err)
  });
};

controller.destroy = (req, res) => {

};

module.exports = controller;
