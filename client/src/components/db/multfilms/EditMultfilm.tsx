import React, { Fragment, useState } from "react";

interface Multfilm {
  id: number,
  name: string,
  logo: string,
  involvement: string,
  popularity: string,
  image_direction: string
}

const EditMultfilm = (multfilm: Multfilm) => {

  const [name, setName] = useState(multfilm.name);
  const [logo, setLogo] = useState(multfilm.logo);
  const [involvement, setInvolvement] = useState(multfilm.involvement);
  const [popularity, setPopularity] = useState(multfilm.popularity);
  const [imageDirection, setImageDirection] = useState(multfilm.image_direction);

  const updateMultfilm = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const body = { name, logo, involvement, popularity, imageDirection };
      await fetch(
        `http://localhost:5000/multfilms/${multfilm.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location.href = "/";
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className='db_text'>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" value={logo} onChange={e => setLogo(e.target.value)} />
        <input type="text" value={involvement} onChange={e => setInvolvement(e.target.value)} />
        <input type="text" value={popularity} onChange={e => setPopularity(e.target.value)} />
        <input type="text" value={imageDirection} onChange={e => setImageDirection(e.target.value)} />
        <button type="button" onClick={e => updateMultfilm(e)}>
          UPDATE
        </button>
      </div>
    </Fragment>
  );
};

export default EditMultfilm;
