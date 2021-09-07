const express = require('express');
const accounts = express.Router();
const pool = require("./../db");

accounts.post('/regist', async (req, res) => {
  try {
    const { name, login, password } = req.body;
    const newAccount = await pool.query(
      "INSERT INTO accounts (name, login, password) VALUES($1, $2, $3) RETURNING *",
      [name, login, password]
    );

    res.json(newAccount.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

accounts.get('/auth/:login/:password', async (req, res) => {
  try {
    const { login, password } = req.params;
    const auth = await pool.query("SELECT * FROM accounts WHERE login = $1 AND password = $2", [login, password])
    
    res.json(auth.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})



module.exports = accounts;