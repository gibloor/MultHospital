CREATE DATABASE multhospital;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(20),
  question VARCHAR(100),
  serial_num VARCHAR(3),
)

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  login VARCHAR(20),
  name VARCHAR(20),
  password VARCHAR(20),
  image VARCHAR(250),
  features VARCHAR(20)[],
)