import express from 'express';

import pool from '../db';

const offers = express.Router();

offers.post('/questOffer/save', async (req, res) => {
  try {
    console.log(req.body)
    const { id, multfilm, question, answer, false1, false2 } = req.body.params;
    const newQuestion = await pool.query(
      "INSERT INTO offers (username, multfilm, question, answer, false1, false2) VALUES($1, $2, $3, $4, $5, $6)", [id, multfilm, question, answer, false1, false2]
    );
    res.json(newQuestion.rows[0]);
  } catch (err: any) {
    console.error(err.message);
  }
})

export default offers;

