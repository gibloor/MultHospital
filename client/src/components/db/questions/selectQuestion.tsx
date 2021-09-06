import React, {useState, useEffect} from 'react';
import './selectQuestion.css';

interface Props {
 topic: string
}

const SelectQuestion = (props: Props) => {
  interface Question {
    id: number,
    topic: string,
    question: string
  }

  const [questions, setQuestions] = useState([]);

  const getQuestions = async (topic: string) => {
    try {
      const response = await fetch(`http://localhost:5000/questions/topic/${topic}`);
      const jsonData = await response.json();
      setQuestions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getQuestions(props.topic);
  }, [props.topic]);



  return (
    <>
      {questions.map((quest: Question) => (
        <div className="question" key={quest.id}>
          <span>{quest.question}</span>
          <input value={quest.question} type="checkbox" />
          {/* checked={} onChange={} */}
        </div> 
      ))}
    </>
  )
}

export default SelectQuestion;



