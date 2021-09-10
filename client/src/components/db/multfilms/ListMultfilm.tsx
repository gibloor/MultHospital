import React, { Fragment, useEffect, useState } from "react";
import EditMultfilm from './EditMultfilm';

const ListMultfilms = () => {

  interface Multfilm {
    id: number,
    name: string,
    logo: string,
    involvement: string,
    popularity: string,
    image_direction: string
  }

  const [multfilms, setMultfilms] = useState<Multfilm[]>([]);

  const deleteMultfilm = async (id:number) => {
    try {
      await fetch(`http://localhost:5000/multfilms/${id}`, {
        method: "DELETE"
      });
      setMultfilms(multfilms.filter(multfilm => multfilm.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMultfilms = async () => {
    try {
      const response = await fetch("http://localhost:5000/multfilms");
      const jsonData = await response.json();
      setMultfilms(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMultfilms();
  }, []);

  return (
    <Fragment>
      <div>
        {multfilms.sort((a, b) => a.name > b.name ? 1 : -1)
                  .sort((a, b) => a.popularity > b.popularity ? 1 : -1)
                  .map(multfilm => (
          <div className='db_list' key={multfilm.id}>
            <EditMultfilm {...multfilm}/>
            <button onClick={() => deleteMultfilm(multfilm.id)} >
              Delete
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ListMultfilms;
