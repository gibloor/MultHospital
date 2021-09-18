import React, { Fragment, useState } from "react";

interface Question {
  id: number,
  topic: string,
  question: string,
  serial_num: number,
  image: string,
  answer: string
}

const EditQuestion = (quest: Question) => {

  const [serialNum, setSerialNum] = useState(quest.serial_num);
  const [topic, setTopic] = useState(quest.topic);
  const [question, setQuestion] = useState(quest.question);
  const [image, setImage] = useState(quest.image);
  const [answer, setAnswer] = useState(quest.answer);

  const updateQuestion = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const body = { topic, question, serialNum, image, answer };
      const response = await fetch(
        `http://localhost:5000/questions/${quest.id}`,
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
        <input type="number" value={serialNum} onChange={e => setSerialNum(Number(e.target.value))}/>
        <input type="text" value={topic} onChange={e => setTopic(e.target.value)}/>
        <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
        <input type="text" value={image} onChange={e => setImage(e.target.value)} />
        <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} />
        <button type="button" onClick={e => updateQuestion(e)}>
          UPDATE
        </button>
      </div>
    </Fragment>
  );
};

export default EditQuestion;
