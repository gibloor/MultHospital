import express from 'express'

import pool from '../db'

const offers = express.Router()

offers.post('/questOffer/save', async (req, res) => {
  try {
    const { id, multfilm, question, answer, false1, false2 } = req.body.params
    const newQuestion = await pool.query(
      "INSERT INTO questoffers (username, multfilm, question, answer, false1, false2) VALUES($1, $2, $3, $4, $5, $6)", [id, multfilm, question, answer, false1, false2]
    )
    res.json('GG')
  } catch (err: any) {
    console.error(err.message)
  }
})

offers.post('/multOffer/save', async (req, res) => {
  try {
    const { id, multfilm, description } = req.body.params
    const newOffer = await pool.query(
      "INSERT INTO multoffers (userid, multfilm, description) VALUES($1, $2, $3)", [id, multfilm, description]
    )
    res.json('GG')
  } catch (err: any) {
    console.error(err.message)
  }
})

export default offers

