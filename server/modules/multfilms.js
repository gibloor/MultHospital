const express = require('express');
const multfilms = express.Router();
const pool = require("./../db");

multfilms.get('/', async (req, res) =>{
  try {
    const allMults = await pool.query("SELECT * FROM multfilms");
    res.json(allMults.rows);
  } catch (err) {
    console.error(err.message);
  }
})

multfilms.post('/', async (req, res) => {
  try {
    const { name, logo, involvement, popularity, imageDirection } = req.body;
    const newQuestion = await pool.query(
      "INSERT INTO multfilms (name, logo, involvement, popularity, image_direction) VALUES($1, $2, $3, $4, $5) RETURNING *", [ name, logo, involvement, popularity, imageDirection ]
    );
    res.json(newQuestion.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

multfilms.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {  name, logo, involvement, popularity, imageDirection  } = req.body;
    await pool.query("UPDATE multfilms SET name = $1, logo = $2, involvement = $3, popularity = $4, image_direction = $5 WHERE id = $6", [ name, logo, involvement, popularity, imageDirection, id]);
    res.json("Multfilm was updated!");
  } catch (err) {
    console.error(err.message);
  }
})

multfilms.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM multfilms WHERE id = $1", [id]);
    res.json("Multfilm was deleted!");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = multfilms;