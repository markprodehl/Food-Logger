DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN DEFAULT false,  
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),      
PRIMARY KEY (id)
);