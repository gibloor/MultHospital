const express = require('express');
const accounts = express.Router();
const pool = require("./../db");
const jsw = require('jsonwebtoken');
const multer = require("multer");

accounts.put(`/acceptAnswer/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const testPassed = true;
    await pool.query(
    "UPDATE accounts SET test_passed = $1 WHERE id = $2", [testPassed, id]);
    res.json("Answer Accepted");
  } catch (err) {
    console.error(err.message);
  }
})

const tokenCreate = (account, res) => {
  const user = account.rows[0];
  if (user) {
    const token = jsw.sign(
      {id: user.id},
      'GibloorKey'
    );
    res.json({
      name: user.name,
      image: user.image,
      involvement: user.involvement,
      test_passed: user.test_passed,
      id: user.id,
      login: user.login,
      position: user.position,
      token,
    })
  } else res.json('Wrong dates')
} 

accounts.post('/registration', async (req, res) => {
  try {
    const { name, login, password } = req.body;
    const account = await pool.query(
      "SELECT * FROM accounts WHERE login = $1", [login]
    );
    if (!account.rows[0]){
      const account = await pool.query(
        "INSERT INTO accounts (name, login, password) VALUES($1, $2, $3) RETURNING *",
        [name, login, password]
      );
      tokenCreate(account, res);
    } else {res.json('This login is already use')}
  } catch (err) {
    console.error(err.message);
  }
})

accounts.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const auth = await pool.query("SELECT * FROM accounts WHERE login = $1 AND password = $2", [login, password]);
 
    tokenCreate(auth, res);
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

accounts.post('/auto_auth', verify, async (req, res) => {
  try {
    const { id } = req.body;
    const authAccount = await pool.query(
      "SELECT * FROM accounts WHERE id = $1", [id]
    );

    tokenCreate(authAccount, res);
  } catch (err) {
    console.error(err.message);
  }
})

accounts.put(`/saveInvolvement/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { involvement } = req.body;
    await pool.query(
    "UPDATE accounts SET involvement = $1 WHERE id = $2", [involvement, id]);
    res.json("Answer Accepted");
  } catch (err) {
    console.error(err.message);
  }
})   

accounts.post('/saveImg/:id', async (req, res) => {
  try  {
    console.log('save img (no)')
  }
  catch (err) {
    console.error(err.message);
  }
});


module.exports = accounts;