const express = require('express');
const accounts = express.Router();
const pool = require("./../db");
const jsw = require('jsonwebtoken');

accounts.put(`/acceptAnswer/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { features } = req.body;
    const testPassed = true;
    const account = await pool.query(
    "UPDATE accounts SET features = $1, test_passed = $2 WHERE id = $3", [features, testPassed, id]);
    res.json("Answer Accepted");
  } catch (err) {
    console.error(err.message);
  }
})

const tokenCreate = (account, res) => {
  const user = account.rows[0];
  if (user) {
    const acsessToken = jsw.sign(
      {id: user.id},
      'GibloorKey'
    );
    res.json({
      name: user.name,
      image: user.image,
      features: user.features,
      acsessToken
    })
  } else res.json('Wrong dates')
} 

accounts.post('/registration', async (req, res) => {
  try {
    const { name, login, password, involvement } = req.body;
    const account = await pool.query(
      "SELECT * FROM accounts WHERE login = $1", [login]
    );
    if (!account.rows[0]){
      let testPassed = false;
      if (involvement === 'common') {
        testPassed = true
      };
      const account = await pool.query(
        "INSERT INTO accounts (name, login, password, involvement, test_passed) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [name, login, password, involvement, testPassed]
      );
      tokenCreate(account, res);
    } else {res.json('This login is already in use')}
  } catch (err) {
    console.error(err.message);
  }
})

accounts.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const account = await pool.query(
      "SELECT * FROM accounts WHERE login = $1 AND password = $2",
      [login, password]
    );
    tokenCreate(account, res)
    
  } catch (err) {
    console.error(err.message);
  }
})

const verify = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (token) {
    jsw.verify(token, 'GibloorKey', (err, user) => {
      if (err) {
        return res.json('Token ' + token + ' so bad, we go to you')
      }
      req.body.id = user.id;
      next()
    })
  } else {
    res.json('Why you here, we go to you')
  }
}

accounts.post('/auth/token', verify, async (req, res) => {
  try {
    const { id } = req.body;
    const authAccount = await pool.query(
      "SELECT * FROM accounts WHERE id = $1", [id]
    );
    const user = authAccount.rows[0]
    res.json(user)
    
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = accounts;