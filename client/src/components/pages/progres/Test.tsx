import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './testStyles.css';
import { getQuestionsSelector } from '../../../redux-saga/selectors/questionsSelector';
import { answerTakeRequest } from '../../../redux-saga/actions/answersActions';
import { getAnswerPendingSelector, getAnswerErrorSelector } from '../../../redux-saga/selectors/answersSelector';
import { getAccountIdSelector } from '../../../redux-saga/selectors/userSelector';
import { userTestComplete } from '../../../redux-saga/actions/userActions';

const Test = () => {
  const questions = useSelector(getQuestionsSelector);
  const answersPending = useSelector(getAnswerPendingSelector);
  const answersError = useSelector(getAnswerErrorSelector);
  const userId = useSelector(getAccountIdSelector);
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState<string[]>(['CRUTCH']);
  const [userAnswer, setUserAnswer] = useState('');

  const dispatch = useDispatch();

  const submitQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userAnswer === questions[counter].answer) {
      setAnswers([questions[counter].topic, ...answers]);
    }
    setUserAnswer('');
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (counter === questions.length && counter !== 0) {
      const answer = { features: answers, id: userId };
      dispatch(answerTakeRequest(answer));
      dispatch(userTestComplete({ feature: answers }));
    }
  }, [counter]);

  return (
    <div>
      {!answersPending && counter < questions.length
        && (
        <form className="multTest_form" onSubmit={(e) => submitQuestion(e)}>
          <span className="question_text">{questions[counter].question}</span>
          <img alt={questions[counter].topic} className="question_image" src={questions[counter].image} />
          <input onChange={(e) => setUserAnswer(e.target.value)} type="text" value={userAnswer} />
        </form>
        )}
      {answersError && <div>ERROR 404</div>}
    </div>
  );
};

export default Test;