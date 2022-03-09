import express from 'express';

import pool from '../db';

const questions = express.Router();

const shuffler = (array: string[]) => {
  let currentIndex = array.length;

  while (0 !== currentIndex) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    let temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}

questions.get('/', async (req, res) =>{
  try {
    const allQuestions = await pool.query("SELECT * FROM questions");
    res.json(allQuestions.rows);
  } catch (err: any) {
    console.error(err.message);
  }
})

questions.get('/take', async (req, res) => {

  interface Question {
    question: string,
    multfilm: string,
    answers?: string[]
  };

  try {
    const { level, topic } = req.query;
    let quest = {
      rows: []
    };
    if (topic === 'newcomers') {
      quest = await pool.query( "SELECT question, multfilm FROM questions WHERE level = $1 AND newcomers = true", [level] );
    } else {
      quest = await pool.query( "SELECT question, multfilm FROM questions WHERE level = $1 AND multfilm = $2", [level, topic]);
    }
    let questions: Question[] = quest.rows;
    questions.map(question => (
      question.answers = shuffler(
        [
          'right',
          'blende1',
          'blende2',
        ]
      )
    ));

    //Перенести шафлер на фронт

    await res.json(questions);
  } catch (err: any) {
    console.error(err.message);
  }
})

questions.post('/', async (req, res) => {
  try {
    const { topic, question, image, answer, level } = req.body;
    const newQuestion = await pool.query(
      "INSERT INTO questions (topic, question, image, answer, level) VALUES($1, $2, $3, $4, $5) RETURNING *", [topic, question, image, answer, level]
    );
    res.json(newQuestion.rows[0]);
  } catch (err: any) {
    console.error(err.message);
  }
})

questions.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { topic, question, image, answer, level } = req.body;
    const updateQuestion = await pool.query("UPDATE questions SET topic = $1, question = $2, image = $3, answer = $4, level = $5 WHERE id = $6", [topic, question, image, answer, level, id]);
    res.json("Question was updated!");
  } catch (err: any) {
    console.error(err.message);
  }
})

questions.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteQuestion = await pool.query("DELETE FROM questions WHERE id = $1", [id]);
    res.json("Question was deleted!");
  } catch (err: any) {
    console.error(err.message);
  }
})

export default questions;

