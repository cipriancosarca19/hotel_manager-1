const Hotel = require('../../models/hotel');
let controller = {};

controller.index = (req, res) => {
  // Automatically looks for views/foldername/filename.ejs
  res.render('hotels/index')
};

controller.new = (req, res) => {
  res.render('hotels/new')
}

controller.show = (req, res) => {
}

controller.create = (req, res) => {
  // Grabs the json from the form submission, goes over to the model, and appends the data to the DB
  Hotel.save(req.body.hotel)
  .then(() => {
    res.redirect('/hotels');
  })
  .catch((err) => {
    res
    .status(400)
    .send(err);
  });
  // Redirects us back to /hotels

}

controller.update = (req, res) => {

}

controller.destroy = (req, res) => {

}

module.exports = controller;
