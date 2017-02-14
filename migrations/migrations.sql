-- Migration is code that touches and manipulates the database schema
CREATE TABLE hotels
(id BIGSERIAL PRIMARY KEY,
hotel_name VARCHAR(255),
hotel_description TEXT,
hotel_address VARCHAR(255),
star_rating INTEGER,
pet_friendly BOOLEAN,
hotel_image_url VARCHAR(255));
