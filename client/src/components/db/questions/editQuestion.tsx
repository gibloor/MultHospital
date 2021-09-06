import React, { Fragment, useState } from "react";
import './edit.css';

interface Question {
  id: number,
  topic: string,
  question: string,
  serial_num: number
}

const EditQuestion = (quest: Question) => {

  const [serialNum, setSerialNum] = useState(quest.serial_num);
  const [topic, setTopic] = useState(quest.topic);
  const [question, setQuestion] = useState(quest.question);

  const updateQuestion = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const body = { topic, question, serialNum };
      const response = await fetch(
        `http://localhost:5000/questions/${quest.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location.href = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className='questions_text'>
        <input type="number" value={serialNum} onChange={e => setSerialNum(Number(e.target.value))}/>
        <input type="text" value={topic} onChange={e => setTopic(e.target.value)}/>
        <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
        <button type="button" onClick={e => updateQuestion(e)}>
          UPDATE
        </button>
      </div>
    </Fragment>
  );
};

export default EditQuestion;
