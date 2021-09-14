import React, { useState, useEffect } from 'react';
import './styles.css'
const Progres = () => {

  interface Multfilm {
    id: number,
    name: string,
    logo: string,
    involvement: string,
    popularity: string,
    image_direction: string
  }

  const [multfilms, setMultfilms] = useState<Multfilm[]>([]);

  const getMultfilms = async () => {
    try {
      const response = await fetch("http://localhost:5000/multfilms");
      const jsonData = await response.json();
      setMultfilms(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMultfilms();
  }, []);

  return (
    <div className="multfilms">
      {multfilms.sort((a, b) => a.name > b.name ? 1 : -1)
                .sort((a, b) => a.popularity > b.popularity ? 1 : -1)
                .map(multfilm => (
        <div className={'multfilms_list '+ multfilm.image_direction} key={multfilm.id}>
          <div className={'multfilms_list_block '+ multfilm.image_direction}>
            <img alt={multfilm.logo} className='multfilms_list_logo' src={multfilm.logo} />
          </div>
          <span>{multfilm.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Progres;