const Hotel = require("../../models/hotel");

let controller = {};

controller.index = (req, res) => {
    Hotel
    .findAll()
    .then((hotel_data) => {
        res.render("hotels/index", {
            hotels: hotel_data
        });
    });
}

controller.new = (req, res) => {
    res.render("hotels/new");
}

controller.show = (req, res) => {
    Hotel
    .findById(req.params.id)
    .then((hotel_data) => {
        res.render("hotels/show", {
            hotel: hotel_data[0]
        });
    })
    .catch((err) => {
        res
        .status(400)
        .send(err);
    });
}

controller.create = (req, res) => {
    Hotel
    .save(req.body.hotel)
    .then(() => {
        res.redirect("/hotels");
    })
    .catch((err) => {
        res
        .status(400)
        .send(err);
    });
}

controller.update = (req, res) => {

}

controller.destroy = (req, res) => {

}

module.exports = controller;
