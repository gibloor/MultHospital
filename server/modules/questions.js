const express = require('express');
const questions = express.Router();
const pool = require("./../db");

questions.get('/', async (req, res) =>{
  try {
    const allQuestions = await pool.query("SELECT * FROM questions");
    res.json(allQuestions.rows);
  } catch (err) {
    console.error(err.message);
  }
})

questions.get('/take', async (req, res) => {
  try {
    const {level, topic} = req.query;
    const quest = await pool.query( "SELECT * FROM questions WHERE level = $1 AND topic = $2 ORDER BY serial_num", [level, topic])
    res.json(quest.rows);
  } catch (err) {
    console.error(err.message);
  }
})

questions.post('/', async (req, res) => {
  try {
    const { topic, question, serialNum, image, answer, level } = req.body;
    const newQuestion = await pool.query(
      "INSERT INTO questions (topic, question, serial_num, image, answer, level) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", [topic, question, serialNum, image, answer, level]
    );
    res.json(newQuestion.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

questions.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { topic, question, serialNum, image, answer, level } = req.body;
    const updateQuestion = await pool.query("UPDATE questions SET topic = $1, question = $2, serial_num = $3, image = $4, answer = $5, level = $6 WHERE id = $7", [topic, question, serialNum, image, answer, level, id]);
    res.json("Question was updated!");
  } catch (err) {
    console.error(err.message);
  }
})

questions.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuestion = await pool.query("DELETE FROM questions WHERE id = $1", [id]);
    res.json("Question was deleted!");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = questions;

