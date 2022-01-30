import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getQuestionsSelector } from 'redux-saga/selectors/questionsSelector';
import { getAccountSelector } from 'redux-saga/selectors/userSelector';
import { userTestingRequire } from 'redux-saga/actions/userActions';
import { questionsTakeRequest } from 'redux-saga/actions/questionsActions';

import Timer from './Timer';

import './styles.scss';

interface Props {
  topic: string,
}

const Survey = (props: Props) => {

  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [timer, setTimer] = useState(15);
  
  const questions = useSelector(getQuestionsSelector);
  const user = useSelector(getAccountSelector);

  const level = user.involvement;
  const topic = props.topic;

  const submitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer === questions[counter].answer) {
      setAnswers([questions[counter].multfilm, ...answers]);
    }
    setCounter(counter + 1);
  };

  const changeTimer = () => {
    setTimer(timer - 1);
  }

  useEffect(() => {
    timer < 0 && setCounter(counter + 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[timer]);

  useEffect(() => {
    if (user.name) {
      const action = {level, topic: topic}
      dispatch(questionsTakeRequest(action));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.test_passed, user.involvement]);

  useEffect(() => {
    if (counter === questions.length && counter !== 0) {
      if (topic !== 'newcomers') {

      } else {
        const answer = { features: answers, userId: user.id, level, topic };
        dispatch(userTestingRequire(answer));
      }
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <>
      {counter < questions.length &&
        <>
          <form className="survey" onSubmit={(e) => submitQuestion(e)}>
            <span className="text">
              {questions[counter].question}
            </span>
            <img
              alt={questions[counter].topic}
              className="survey__image"
              src={`/assets/images/multfilms/${questions[counter].multfilm}/multTests/${level}/${questions[counter].image}.png`}
            />
            <div className="survey__answers">
              {questions[counter].answers.map(answer => (
                <input
                  className="survey__answer text" key={answer}
                  value={answer} type="submit"
                  onClick={() => setUserAnswer(answer)}
                />
              ))}
            </div>
          </form>
          {
            topic !== 'newcomers' &&
            <Timer timer={timer} changeTimer={changeTimer} />
          }
        </> ||
        topic !== 'newcomers' && counter === questions.length &&
        (
          answers.length > questions.length * 0.7 && <div>NICE</div> ||
          <div>loose</div>
        )
      }
    </>
  );
};

export default Survey;