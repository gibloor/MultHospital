import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getQuestionsSelector } from 'redux-saga/selectors/questionsSelector';
import { getAccountSelector } from 'redux-saga/selectors/userSelector';
import { userTestingRequare } from 'redux-saga/actions/userActions';
import { questionsTakeRequest } from 'redux-saga/actions/questionsActions';

import Timer from './Timer';

import './styles.scss';

interface Props {
  topic: string,
}

const Survey = (props: Props) => {
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [timer, setTimer] = useState(15);
  
  const questions = useSelector(getQuestionsSelector);
  const user = useSelector(getAccountSelector);

  const level = user.involvement;
  const topic = props.topic;

  const dispatch = useDispatch();

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
  },[timer]);

  useEffect(() => {
    if (user.name) {
      const action = {level, topic: topic}
      dispatch(questionsTakeRequest(action));
    }
  }, [user.test_passed, user.involvement]);

  useEffect(() => {
    if (counter === questions.length && counter !== 0) {
      if (topic !== 'newcomers' && answers.length < 7) {

      } else {
        const answer = { features: answers, userId: user.id, level, topic };
        dispatch(userTestingRequare(answer));
      }
    }
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
              src={`/assets/images/multTests/${topic}/${level}/${questions[counter].image}`}
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
        topic !== 'newcomers' && counter === 10 &&
        (
          answers.length > 7 && <div>NICE</div> ||
          <div>loose</div>
        )
      }
    </>
  );
};

export default Survey;