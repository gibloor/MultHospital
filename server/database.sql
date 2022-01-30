CREATE DATABASE multhospital;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  topic VARCHAR(10),
  level VARCHAR(20),
  question VARCHAR(100),
  serial_num INTEGER,
  image VARCHAR(255),
  answer VARCHAR(30),
  blende1 VARCHAR(30),
  blende2 VARCHAR(30),
);

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  login VARCHAR(20),
  name VARCHAR(20),
  password VARCHAR(20),
  image VARCHAR(250),
  features VARCHAR(20)[],
  test_passed BOOLEAN,
  involvement VARCHAR(20),
  acsess_token VARCHAR(255),
);

CREATE TABLE multfilms (
  id SERIAL PRIMARY KEY,
  logo VARCHAR(250),
  involvement VARCHAR(20),
  name VARCHAR(30),
  direction VARCHAR(15),
);

CREATE TABLE viewed (
  id SERIAL PRIMARY KEY,
  multfilm VARCHAR(40),
  user_id INTEGER REFERENCES accounts (id)
);

CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  multfilm_id INTEGER REFERENCES multfilms (id),
  name VARCHAR(30)
);

CREATE TABLE achievements (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES accounts (id),
  title INTEGER,
  degree INTEGER
);