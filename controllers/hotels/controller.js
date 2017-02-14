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
  res.json(req.body);
}

controller.update = (req, res) => {

}

controller.destroy = (req, res) => {

}

module.exports = controller;
