const express = require('express');
const multfilms = express.Router();
const pool = require("./../db");

multfilms.get('/:id', async (req, res) =>{
  try {
    const { id } = req.params;

    let allMults = await pool.query(`SELECT * FROM multfilms ORDER BY level, serial_number`);
    const features = await pool.query("SELECT multfilm, viewed FROM watched WHERE user_id = $1", [id]);
    const characters = await pool.query("SELECT * FROM characters");

    allMults.rows.map(multfilm => {
      
      features.rows.map(multfilmMod => (
        (multfilm.name === multfilmMod.multfilm)
        && (multfilm.watched = true, multfilm.viewed = multfilmMod.viewed)
      ))

      multfilm.characters = [];
      characters.rows.map(character => {    
        character.multfilm_id === multfilm.id
        && multfilm.characters.push(character)
      })
    });

    let sortedMults = {};
    let delay;
    const branches = [1, 2, 3];
    for (let i= 0 ; i < branches.length ; i++) {
      sortedMults[branches[i]] = allMults.rows.filter(multfilm => multfilm.level == branches[i]).sort(function(a, b) {
        return a.watched === b.watched ? 0 : a.watched ? -1 : 1;
      })

      delay = 0;
      sortedMults[branches[i]].map(multfilm => {
        !multfilm.viewed && (multfilm.delay = delay, delay += 5 );
      })
    }

    res.json({...sortedMults});
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = multfilms;