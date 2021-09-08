const express = require('express');
const accounts = express.Router();
const pool = require("./../db");
const jsw = require('jsonwebtoken');

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
  } else res.json('Not valid')
}

accounts.post('/regist', async (req, res) => {
  try {
    const { name, login, password } = req.body;
    const account = await pool.query(
      "INSERT INTO accounts (name, login, password) VALUES($1, $2, $3) RETURNING *",
      [name, login, password]
    );
    tokenCreate(account, res);
  } catch (err) {
    console.error(err.message);
  }
})

accounts.post('/auth', async (req, res) => {
  try {
    const { login, password } = req.params;
    const auth = await pool.query("SELECT * FROM accounts WHERE login = $1 AND password = $2", [login, password])
    
    res.json(auth.rows[0]);
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