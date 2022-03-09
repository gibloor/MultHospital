import express, { Request, Response, NextFunction } from 'express';
import jsw from 'jsonwebtoken';

import verify from './accounts';

import pool from '../db';

const admin = express.Router();

admin.post('/takeInfo', verify, async (req, res) => {
  try  {
    const multfilms = await pool.query(`SELECT * FROM multfilms ORDER BY level, serial`);

    // const login = await pool.query(
    //   "SELECT login FROM accounts WHERE id = $1", [id]
    // );
    console.log('ok')
  }
  catch (err: any) {
    console.error(err.message);
  }
});

export default admin;