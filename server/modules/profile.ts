import express from 'express'
import fs from 'fs'

import pool from '../db'
import { userImgPath } from '..'

const profile = express.Router()

profile.post('/saveAvatar/:id', async (req, res) => {
  try  {
    const { id } = req.params
    const { avatar } = req.body
    const data = avatar.replace(/^data:image\/\w+base64,/, "")
    const buf = Buffer.from(data, 'base64')

    const login = await pool.query(
      "SELECT login FROM accounts WHERE id = $1", [id]
    )

    fs.writeFile(`${userImgPath}/app_data/images/users/${login.rows[0].login}.png`, buf, (err) => {
      if (err) throw err
      console.log('The file has been saved!')
    })
  }
  catch (err: any) {
    console.error(err.message)
  }
})

profile.get('/takeAvatar/:id', async (req, res) => {
  try  {
    const { id } = req.params

    const login = await pool.query(
      "SELECT login FROM accounts WHERE id = $1", [id]
    )

    fs.readFile(`${userImgPath}/app_data/images/users/${login.rows[0].login}.png`, function (err, data) {
      if (!data) {
        res.send('')
      } else {

        let base64 = Buffer.from(data).toString('base64')
        base64 = 'data:image/pngbase64,' + base64
        res.send(base64)
      }
    }) 
  }
  catch (err: any) {
    console.error(err.message)
  }
})

profile.get('/takeInfo/:id', async (req, res) => {
  try  {

    const { id } = req.params

    const loginSelect = await pool.query(
      "SELECT login, level FROM accounts WHERE id = $1", [id]
    )
    const watchedSelect = await pool.query(
      "SELECT multfilm, level, date FROM watched WHERE user_id = $1", [id]
    )

    interface Watched {
      multfilm: string,
      level: number,
      date: Date,
    }

    const { login } = loginSelect.rows[0]
    const watched: Watched[] = watchedSelect.rows
    const level: number = loginSelect.rows[0].level

    interface Statistics {
      [key: string]: number,
    }

    let statistics: Statistics = {
      level: level,
      totalAmount: 0,
      level1: 0,
      level2: 0,
      level3: 0,
      firstTime: 0,
    }

    if (watched.length) {

      statistics.totalAmount = watched.length
      const firstTime = watched[0].date

      watched.map(watched => {
        statistics[`level${watched.level}`] += 1

        if (watched.date === firstTime) {
          statistics.firstTime += 1
        }
      })
    }

    fs.readFile(`${userImgPath}/app_data/images/users/${login}.png`, function (err, data) {
      if (!data) {
        res.send({
          avatar: '',
          statistics: statistics
        })
      } else {
        let base64 = Buffer.from(data).toString('base64')
        base64 = 'data:image/pngbase64,' + base64
        res.send({
          avatar: base64,
          statistics: statistics
        })
      }
    }) 
  }
  catch (err: any) {
    console.error(err.message)
  }
})

export default profile