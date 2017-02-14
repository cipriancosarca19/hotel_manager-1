const db = require('../config/database')

// When dealing with models, make 1st letter uppercase (convention)
let Hotel = {};

Hotel.findAll = () => {
  return db.query('SELECT * FROM hotels')
};

Hotel.findById = (id) => {
  return db.query('SELECT * FROM hotels WHERE id = $1', [id]);
};

Hotel.save = (hotel) => {
    //SQL code to create a hotel
    return db.query(
      `INSERT INTO hotels
      (hotel_name,
      hotel_description,
      hotel_address,
      star_rating,
      pet_friendly,
      hotel_image_url)
      VALUES ($1, $2, $3, $4, $5, $6)`,
      [hotel.hotel_name,
      hotel.hotel_description,
      hotel.hotel_address,
      hotel.star_rating,
      hotel.pet_friendly,
      hotel.hotel_image_url]
    );
};

Hotel.update = (hotel, id) => {
    //SQL code to update a hotel
    return db.query(
      `UPDATE hotels SET
      hotel_name = $1,
      hotel_description = $2,
      hotel_address = $3,
      star_rating = $4,
      pet_friendly = $5,
      hotel_image_url = $6
      WHERE id = $7`,
      [hotel.hotel_name,
      hotel.hotel_description,
      hotel.hotel_address,
      hotel.star_rating,
      hotel.pet_friendly,
      hotel.hotel_image_url,
      id]
    );
};

Hotel.destroy = (id) => {
    //SQL code to delete a hotel
    return db.query('DELETE FROM hotels WHERE id = $1', [id]);
};

module.exports = Hotel;
