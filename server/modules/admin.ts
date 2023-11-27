import express, { Request, Response, NextFunction } from 'express'
import jsw from 'jsonwebtoken'

import { secretKey } from '..'
import pool from '../db'

const admin = express.Router()

const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (token) {
    jsw.verify(token, secretKey, (err, user: any) => {
      if (err) {
        return res.json('Token ' + token + ' so bad, we go to you')
      }
      if (req.body.permission > user.permission) {
        return res.json("Lier =)")
      }
      next()
    })
  } else {
    res.json('Why you here, we go to you')
  }
}

admin.post('/takeInfo', verify, async (req, res) => {
  try  {
    const multfilms = await pool.query('SELECT name, level, serial FROM multfilms ORDER BY level, serial')

    res.json({multfilms: multfilms.rows})
  }
  catch (err: any) {
    console.error(err.message)
  }
})

export interface Multfilm {
  name: string,
  level: number,
  serial: number,
}

admin.post('/saveMultfilms', verify, async (req, res) => {
  try  {
    const multfilms: Multfilm[] = req.body.multfilms
    const multfilmsTake = await pool.query('SELECT name, level, serial FROM multfilms ORDER BY level, serial')
    let dbMultfilms: Multfilm[] = multfilmsTake.rows

    multfilms.map(multfilm => {
      let updated = false
      dbMultfilms.map((dbMultfilm, index) => {
        if (dbMultfilm.name === multfilm.name) {
          pool.query("UPDATE multfilms SET level = $1, serial = $2 WHERE name = $3", [multfilm.level, multfilm.serial, multfilm.name])
          dbMultfilms.splice(index, 1)
          updated = true
        }
      })
      if (!updated) {
        pool.query("INSERT INTO multfilms (name, level, serial) VALUES($1, $2, $3) RETURNING *", [multfilm.name, multfilm.level, multfilm.serial])
      }
    })

    if (dbMultfilms.length) {
      dbMultfilms.map(multfilm => {
        pool.query("DELETE FROM multfilms WHERE name = $1", [multfilm.name])
      })
    }
    res.json('gg')
  }
  catch (err: any) {
    console.error(err.message)
  }
})

export default admin