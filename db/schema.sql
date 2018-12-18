-- Create the burgers_db database --
CREATE DATABASE burgers_db;
USE burgers_db;


-- Create a burgers table with the required fields --
CREATE TABLE burgers 
(

  id INT NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);