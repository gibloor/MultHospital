const express = require('express');
const images = express.Router();
const fs = require('fs');
const pool = require("./../db");

images.post('/saveAvatar/:login', async (req, res) => {
  try  {
    const { login } = req.params;
    const { img } = req.body;
    const data = img.replace(/^data:image\/\w+;base64,/, "");
    const buf = Buffer.from(data, 'base64');

    fs.writeFile(`./app_data/images/users/${login}/avatar.png`, buf, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
  catch (err) {
    console.error(err.message);
  }
});

images.get('/takeAvatar/:id', async (req, res) => {
  try  {
    const { id } = req.params;
    const login = await pool.query(
      "SELECT login FROM accounts WHERE id = $1", [id]
    );

    fs.readFile(`./app_data/images/users/${login.rows[0].login}/avatar.png`, function (err, data) {
      if (!data) {
        res.send('');
      } else {
        let base64 = Buffer.from(data).toString('base64');
        base64 = 'data:image/png;base64,' + base64;
        res.send(base64);
      }
    }); 
  }
  catch (err) {
    console.error(err.message);
  }
});

module.exports = images;