import React, { Fragment, useEffect, useState } from "react";
import EditQuestion from './EditQuestion';
import './styles.css';

const ListQuestions = () => {

  interface Question {
    id: number,
    topic: string | never,
    question: string,
    serial_num: number,
    image: string,
    meaning: string
  }

  const [questions, setQuestions] = useState<Question[]>([]);

  const deleteQuestion = async (id:number) => {
    try {
      const deleteQuestion = await fetch(`http://localhost:5000/questions/${id}`, {
        method: "DELETE"
      });

      setQuestions(questions.filter(question => question.id !== id));
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getQuestions = async () => {
    try {
      const response = await fetch("http://localhost:5000/questions");
      const jsonData = await response.json();
      setQuestions(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <Fragment>
      <div>
        {questions.sort((a, b) => a.id < b.id ? 1 : -1)
                  .sort((a, b) => a.topic > b.topic ? 1 : -1)
                  .map(quest => (
          <div className='db_list' key={quest.id}>
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

export default ListQuestions;
