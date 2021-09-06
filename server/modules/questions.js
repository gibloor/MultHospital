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

questions.get('/topic/:topic', async (req, res) => {
  try {
    const {topic} = req.params;
    const quest = await pool.query( "SELECT * FROM questions WHERE topic = $1", [topic])
    res.json(quest.rows);
  } catch (err) {
    console.error(err.message);
  }
})

questions.post('/', async (req, res) => {
  try {
    const { topic, question, serialNum } = req.body;
    const newQuestion = await pool.query(
      "INSERT INTO questions (topic, question, serial_num) VALUES($1, $2, $3) RETURNING *", [topic, question, serialNum]
    );

    res.json(newQuestion.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

questions.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { topic, question, serialNum } = req.body;
    const updateQuestion = await pool.query("UPDATE questions SET topic = $1, question = $2, serial_num = $3 WHERE id = $4", [topic, question, serialNum, id]);
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

