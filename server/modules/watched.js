const express = require('express');
const watched = express.Router();
const pool = require("../db");

watched.put('/tested/:userId', async (req, res) => {
  try {
    const { features } = req.body;
    const { userId } = req.params;
    for (multfilm of features) {
      pool.query(
        "INSERT INTO watched (user_id, multfilm) VALUES($1, $2)", [userId, multfilm]
      )
    };
    await pool.query("UPDATE accounts SET test_passed = $1 WHERE id = $2", [true, userId]);
    res.json('test complited');
  } catch (err) {
    console.error(err.message);
  }
})

watched.put('/viewed/:userId', async (req, res) => {
  try {
    const { viewed } = req.body;
    const { userId } = req.params;
  
    viewed.map(multfilm => {
      pool.query(
        "UPDATE watched SET viewed = true WHERE user_id = $1 AND multfilm = $2", [userId, multfilm]
      )
    })
    res.json('save complited');
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = watched;

