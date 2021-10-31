import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getQuestionsSelector } from 'redux-saga/selectors/questionsSelector';
import { getAccountIdSelector } from 'redux-saga/selectors/userSelector';
import { userTestingRequare } from 'redux-saga/actions/userActions';

import './styles.scss';

const Test = () => {
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  
  const questions = useSelector(getQuestionsSelector);
  const userId = useSelector(getAccountIdSelector);

  const dispatch = useDispatch();

  const submitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer === questions[counter].answer) {
      setAnswers([questions[counter].multfilm, ...answers]);
    }
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (counter === questions.length && counter !== 0) {
      const answer = { features: answers, userId: userId };
      dispatch(userTestingRequare(answer));
    }
  }, [counter]);

  return (
    <>
      {counter < questions.length
        && (
        <form className="multTest_form" onSubmit={(e) => submitQuestion(e)}>
          <span className="text">{questions[counter].question}</span>
          <img alt={questions[counter].topic} className="test_image" src={`${process.env.PUBLIC_URL}/assets/images/multTests/${questions[counter].image}`} />
          <div className="test_answers">
            {questions[counter].answers.map(answer => (
              <input className="test_answer text" key={answer} value={answer} type="submit" onClick={() => setUserAnswer(answer)} />
            ))}
          </div>
        </form>
        )
      }
    </>
  );
};

export default Test;