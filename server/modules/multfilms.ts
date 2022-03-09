import express from 'express';

import pool from '../db';

const multfilms = express.Router();

multfilms.get('/:id', async (req, res) =>{
  try {
    const { id } = req.params;

    interface Character {
      multfilm_id: number,
      name: string,
    }
    interface Multfilm {
      id: number,
      name: string,
      level: number,
      serial: number,
      watched?: boolean,
      viewed?: boolean,
      characters?: Character[],
      delay?: number,
    };
    interface Feature {
      multfilm: string,
      viewed: boolean,
    }

    const multfilmsSelect = await pool.query(`SELECT id, name, level, serial FROM multfilms ORDER BY level, serial`);
    const featuresSelect = await pool.query("SELECT multfilm, viewed FROM watched WHERE user_id = $1", [id]);
    const charactersSelect = await pool.query("SELECT multfilm_id, name FROM characters");

    let multfilms: Multfilm[] = multfilmsSelect.rows;
    const features: Feature[] = featuresSelect.rows;
    const characters: Character[] = charactersSelect.rows;

    multfilms.map(multfilm => {
      
      features.map(multfilmMod => (
        (multfilm.name === multfilmMod.multfilm)
        && (multfilm.watched = true, multfilm.viewed = multfilmMod.viewed)
      ))

      multfilm.characters = [];
      characters.map(character => {    
        character.multfilm_id === multfilm.id
        && multfilm.characters?.push(character)
      })
    });

    interface SortedMultfilms {
      [key: string]: Multfilm[],
    }

    let sortedMultfilms: SortedMultfilms = {};
    let delay = 0;
    const branches = [1, 2, 3];
    for (let i= 0 ; i < branches.length ; i++) {
      sortedMultfilms[branches[i]] = multfilms.filter(multfilm => multfilm.level == branches[i]).sort((a, b) => {
        return a.watched === b.watched ? 0 : a.watched ? -1 : 1;
      })

      delay = 0;
      sortedMultfilms[branches[i]].map(multfilm => {
        !multfilm.viewed && (multfilm.delay = delay, delay += 5 );
      })
    }

    res.json({...sortedMultfilms});
  } catch (err: any) {
    console.error(err.message);
  }
})

export default multfilms;