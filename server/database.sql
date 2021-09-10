CREATE DATABASE multhospital;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(20),
  question VARCHAR(100),
  serial_num VARCHAR(3),
  image varchar(255),
  meaning varchar(20)
)
;
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  login VARCHAR(20),
  name VARCHAR(20),
  password VARCHAR(20),
  image VARCHAR(250),
  features VARCHAR(20)[],
);

CREATE TABLE multfilms (
  id SERIAL PRIMARY KEY,
  logo VARCHAR(250),
  involvment VARCHAR(20),
  popularity VARCHAR(15),
  name VARCHAR(20),
  image_direction VARCHAR(15)
)