const express = require('express');
const multfilms = express.Router();
const pool = require("./../db");

multfilms.get('/:id', async (req, res) =>{
  try {
    const { id } = req.params;

    let allMults = await pool.query(`SELECT * FROM multfilms ORDER BY involvement, serial_number`);
    const featuresTake = await pool.query("SELECT multfilm, viewed FROM watched WHERE user_id = $1", [id]);
    
    allMults.rows.map(multfilm => (
      featuresTake.rows.map(multfilmMod => (
        (multfilm.name === multfilmMod.multfilm)
        && (multfilm.watched = true, multfilm.viewed = multfilmMod.viewed)
      ))
    ))

    let filteredMults = {};
    let delay;
    const branches = ['common', 'uncommon', 'rare'];
    for (let i= 0 ; i < branches.length ; i++) {
      filteredMults[`${branches[i]}Mults`] = allMults.rows.filter(multfilm => multfilm.involvement === branches[i]).sort(function(a, b) {
        return a.watched === b.watched ? 0 : a.watched ? -1 : 1;
      })
      delay = 0,
      filteredMults[`${branches[i]}Mults`].map(multfilm => (
        !multfilm.viewed && (multfilm.delay = delay, delay += 5 ) 
      ))
    }

    res.json({...filteredMults});
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = multfilms;