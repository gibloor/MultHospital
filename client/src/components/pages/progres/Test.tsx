import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './testStyles.css';
import { getQuestionsSelector } from '../../../redux-saga/selectors/questionsSelector'

const Test = () => {

  const questions = useSelector(getQuestionsSelector);

  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    console.log(counter)
  }, [counter])

  const funk = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCounter(counter+1);
    setAnswer('');
  }

  return (
    <form className="multTest" onSubmit={(e) => funk(e)}>
      <h3>Так как вы тут первый раз, пройдите маленький тест:</h3>
        {counter < questions.length && questions[counter].question &&
        <>
          {counter + ' ' + questions.length}
          <p key={questions[counter].id} className="question_text">{questions[counter].question}</p>
          <img alt={questions[counter].question} className="question_image" src={questions[counter].image}></img>
          <input onChange={(e) => setAnswer(e.target.value)} value={answer} type="text"></input>
        </>
        }
    </form>
  )
}

export default Test