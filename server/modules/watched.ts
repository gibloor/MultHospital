import express from 'express'

import pool from '../db'

const watched = express.Router()

watched.put('/tested/:userId', async (req, res) => {
  try {
    const { level, topic } = req.body
    const { userId } = req.params
    const date = Date().toLocaleString()

    const features: string[] = req.body.features

    features.map(feature => {
      pool.query(
        "INSERT INTO watched (user_id, level, multfilm, date) VALUES($1, $2, $3, $4)", [userId, level, feature, date]
      )
    })
    if (topic === "newcomers") {
      await pool.query("UPDATE accounts SET test_passed = $1 WHERE id = $2", [true, userId])
    }
    res.json('test complited')
  } catch (err: any) {
    console.error(err.message)
  }
})

watched.put('/viewed/:userId', async (req, res) => {
  try {
    const viewed: string[] = req.body.viewed
    const { userId } = req.params
  
    viewed.map(multfilm => {
      pool.query(
        "UPDATE watched SET viewed = true WHERE user_id = $1 AND multfilm = $2", [userId, multfilm]
      )
    })
    res.json('save complited')
  } catch (err: any) {
    console.error(err.message)
  }
})

export default watched

