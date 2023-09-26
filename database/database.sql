CREATE DATABASE demo;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone_number VARCHAR(15)
);

CREATE TABLE dht_sensor(
    id INT AUTO_INCREMENT PRIMARY KEY,
    temperature DOUBLE not NULL,
    humidity DOUBLE not null,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);