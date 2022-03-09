import express, { Request, Response, NextFunction } from 'express';
import jsw from 'jsonwebtoken';

import pool from '../db';

const admin = express.Router();

const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    jsw.verify(token, 'GibloorKey', (err, user: any) => {
      if (err) {
        return res.json('Token ' + token + ' so bad, we go to you')
      }
      if (req.body.permission > user.permission) {
        return res.json("Lier =)")
      };
      next()
    })
  } else {
    res.json('Why you here, we go to you')
  }
}

admin.post('/takeInfo', verify, async (req, res) => {
  try  {
    const multfilms = await pool.query('SELECT * FROM multfilms ORDER BY level, serial');

    res.json({multfilms: multfilms.rows});
  }
  catch (err: any) {
    console.error(err.message);
  }
});

export default admin;