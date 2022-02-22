const express = require('express');
const accounts = express.Router();
const jsw = require('jsonwebtoken');
const fs = require('fs');

const pool = require("./../db");

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

    fs.readFile(`./app_data/images/users/${user.login}/avatar.png`, (err, data) => {
      if (data) {
        let base64 = Buffer.from(data).toString('base64');
        base64 = 'data:image/png;base64,' + base64;
        res.json({
          ...user,
          avatar: base64,
          token,
        })
      } else {
        res.json({
          ...user,
          avatar: '',
          token,
        })
      }
    });

  } else res.json({errorType: 'signIn'})
} 

accounts.post('/registration', async (req, res) => {
  try {
    const { name, login, password, email, mailing } = req.body;
    const account = await pool.query(
      "SELECT * FROM accounts WHERE login = $1", [login]
    );
    if (!account.rows[0]){
      const account = await pool.query(
        "INSERT INTO accounts (name, login, password, email, mailing) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [name, login, password, email, mailing]
      );

      fs.mkdir(`./app_data/images/users/${login}`, (err) => {
        if (err) throw err;
        console.log('The dir has been created!');
      });
      
      tokenCreate(account, res);
    } else {
      res.json({errorType: 'signUp'})
    }
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
    const { level } = req.body;
    await pool.query(
      "UPDATE accounts SET level = $1 WHERE id = $2", [level, id]
    );
    res.json("Answer Accepted");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = accounts;