import express, { Request, Response, NextFunction } from 'express'
import jsw from 'jsonwebtoken'
import fs from 'fs'

import pool from '../db'
import { userImgPath, secretKey } from '..'

const accounts = express.Router()

accounts.put(`/acceptAnswer/:id`, async (req, res) => {
  try {
    const { id } = req.params
    const testPassed = true
    await pool.query(
    "UPDATE accounts SET test_passed = $1 WHERE id = $2", [testPassed, id])
    res.json("Answer Accepted")
  } catch (err: any) {
    console.error(err.message)
  }
})

interface Account {
  id: number,
  name: string,
  login: string,
  password: string,
  email: string,
  permission: number,
  level: number,
  test_passed: boolean,
}

const tokenCreate = (account: Account, res: Response) => {
  const user = account

  if (user) {
    const token = jsw.sign(
      {id: user.id, permission: user.permission},
      secretKey
    )

    fs.readFile(`${userImgPath}/app_data/images/users/${user.login}.png`, (err, data) => {
      if (data) {
        let base64 = Buffer.from(data).toString('base64')
        base64 = 'data:image/png;base64,' + base64
        res.json({
          ...user,
          avatar: base64,
          token,
        })
      } else {
        res.json({
          ...user,
          avatar: '',
          token,
        })
      }
    })

  } else res.json({errorType: 'signIn'})
} 

accounts.post('/registration', async (req, res) => {
  try {
    const { name, login, password, email } = req.body
    const account = await pool.query(
      "SELECT * FROM accounts WHERE login = $1 OR email = $2", [login, email]
    )
    
    if (!account.rows[0]) {
      const account = await pool.query(
        "INSERT INTO accounts (name, login, password, email) VALUES($1, $2, $3, $4  ) RETURNING *",
        [name, login, password, email]
      )

      tokenCreate(account.rows[0], res)
    } else {
      res.json({errorType: 'signUp'})
    }
  } catch (err: any) {
    console.error(err.message)
  }
})

accounts.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body
    const auth = await pool.query("SELECT * FROM accounts WHERE login = $1 AND password = $2", [login, password])
 
    tokenCreate(auth.rows[0], res)
  } catch (err: any) {
    console.error(err.message)
  }
})

export const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (token) {
    jsw.verify(token, secretKey, (err, user: any) => {
      if (err) {
        return res.json('Token ' + token + ' so bad, we go to you')
      }
      req.body.id = user.id
      next()
    })
  } else {
    res.json('Why you here, we go to you')
  }
}

accounts.post('/auto_auth', verify, async (req, res) => {
  try {
    const { id } = req.body
    const authAccount = await pool.query(
      "SELECT * FROM accounts WHERE id = $1", [id]
    )
    tokenCreate(authAccount.rows[0], res)
  } catch (err: any) {
    console.error(err.message)
  }
})

accounts.put(`/saveInvolvement/:id`, async (req, res) => {
  try {
    const { id } = req.params
    const { level } = req.body
    
    await pool.query(
      "UPDATE accounts SET level = $1, test_passed = $2 WHERE id = $3", [level, level == 1, id]
    )

    res.json("Answer Accepted")
  } catch (err: any) {
    console.error(err.message)
  }
})

export default accounts