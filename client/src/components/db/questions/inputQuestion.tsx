import React, { Fragment, useState } from "react";
const InputQuestion = () => {

  const [serialNum, setSerialNum] = useState(0);
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState('');
  const [meaning, setMeaning] = useState('');

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { topic, question, serialNum, image, meaning };
      const response = await fetch("http://localhost:5000/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location.href = "/";
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <form className="db_quest" onSubmit={onSubmitForm}>
        <div>
          <span>serial number</span>
          <input
            type="number"
            value={serialNum}
            onChange={e => setSerialNum(Number(e.target.value))}
          />
        </div>
        <div>
          <span>topic</span>
          <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
          />
        </div>
        <div>
          <span>question</span>
          <input
            type="text"
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <span>image</span>
          <input
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </div>
        <div>
          <span>meaning</span>
          <input
            type="text"
            value={meaning}
            onChange={e => setMeaning(e.target.value)}
          />
        </div>
        <button type="submit">ADD</button>
      </form>
    </Fragment>
  );
};

export default InputQuestion;
