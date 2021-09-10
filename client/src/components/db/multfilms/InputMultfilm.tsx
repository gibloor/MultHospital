import React, { Fragment, useState } from "react";

const InputMultfilm = () => {

  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [involvement, setInvolvement] = useState('');
  const [popularity, setPopularity] = useState('');
  const [imageDirection, setImageDirection] = useState('');

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { name, logo, involvement, popularity, imageDirection };
      await fetch("http://localhost:5000/multfilms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location.href = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <form className="db_quest" onSubmit={onSubmitForm}>
        <div>
          <span>name</span>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <span>logo</span>
          <input
            type="text"
            value={logo}
            onChange={e => setLogo(e.target.value)}
          />
        </div>
        <div>
          <span>involvement</span>
          <input
            type="text"
            value={involvement}
            onChange={e => setInvolvement(e.target.value)}
          />
        </div>
        <div>
          <span>popularity</span>
          <input
            type="text"
            value={popularity}
            onChange={e => setPopularity(e.target.value)}
          />
        </div>
        <div>
          <span>image direction</span>
          <input
            type="text"
            value={imageDirection}
            onChange={e => setImageDirection(e.target.value)}
          />
        </div>
        <button type="submit">ADD</button>
      </form>
    </Fragment>
  );
};

export default InputMultfilm;
