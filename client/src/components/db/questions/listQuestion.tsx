import React, { Fragment, useEffect, useState } from "react";
import EditQuestion from './editQuestion';
import './list.css';

const ListItems = () => {

  interface Question {
    id: number,
    topic: string | never,
    question: string,
    serial_num: number
  }

  const [questions, setQuestions] = useState<Question[]>([]);

  const deleteQuestion = async (id:number) => {
    try {
      const deleteQuestion = await fetch(`http://localhost:5000/questions/${id}`, {
        method: "DELETE"
      });

      setQuestions(questions.filter(question => question.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getQuestions = async () => {
    try {
      const response = await fetch("http://localhost:5000/questions");
      const jsonData = await response.json();
      setQuestions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <Fragment>
      <div>
        {questions.sort((a, b) => a.topic > b.topic ? 1 : -1).map(quest => (
          <div className='questions_list' key={quest.id}>
            <EditQuestion {...quest}/>
            <button onClick={() => deleteQuestion(quest.id)} >
              Delete
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ListItems;
