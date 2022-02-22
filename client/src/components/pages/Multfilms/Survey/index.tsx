import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getQuestions, getQuestionsPending } from 'redux-saga/selectors/questionsSelector';
import { getAccountSelector } from 'redux-saga/selectors/userSelector';
import { multfilmTestingRequire } from 'redux-saga/actions/multfilmsActions';
import { questionsTakeRequest } from 'redux-saga/actions/questionsActions';

import Timer from './Timer';

import './styles.scss';

interface Props {
  topic: string,
  questLevel?: number,
}

const Survey = (props: Props) => {

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [counter, setCounter] = useState(0);
 
  const [testEnd, setTestEnd] = useState(false);
  
  const questions = useSelector(getQuestions);
  const questionsPending = useSelector(getQuestionsPending);
  const user = useSelector(getAccountSelector);

  const { level, test_passed, name } = user;
  const { topic, questLevel } = props;

  const submitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer === 'right') {
      setAllAnswers([questions[counter].multfilm, ...allAnswers]);
    }
    setCounter(counter + 1);
  };

  const counterChange = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (name) {
      dispatch(questionsTakeRequest({ level, topic }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test_passed, level]);

  useEffect(() => {
    if (counter === questions.length && counter !== 0) {

      if (topic !== 'newcomers') {
        if (allAnswers.length > questions.length * 0.75) {
          setAllAnswers([allAnswers[0]])
        } else {
          setAllAnswers([])
        };
        setTestEnd(true);
      };

      dispatch(multfilmTestingRequire({ features: allAnswers, userId: user.id, topic, userLevel: level, questLevel }));
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <>
      {counter < questions.length && !questionsPending &&
        <>
          <form className="survey" onSubmit={(e) => submitQuestion(e)}>
            <span className="text">
              { t(`multfilms.${questions[counter].multfilm}.questions.${level}.${questions[counter].question}.question`)}
            </span>
            <img
              alt={questions[counter].topic}
              className="survey__image"
              src={`/assets/images/multfilms/${questions[counter].multfilm}/multTests/${level}/${questions[counter].question}.png`}
            />
            <div className="survey__answers">
              {questions[counter].answers.map((answer, index) => (
                <div key={answer}>
                  <label
                    htmlFor={`answer_button_${index}`}
                    className="survey__answer text"
                  >
                    { t(`multfilms.${questions[counter].multfilm}.questions.${level}.${questions[counter].question}.${answer}`)}
                  </label>
                  <input
                    className="survey__answer_button"
                    type="submit"
                    onClick={() => setUserAnswer(answer)}
                    id={`answer_button_${index}`}
                  />
                </div>
              ))}
            </div>
          </form>
          {topic !== 'newcomers' &&
            <Timer counterChange={counterChange} counter={counter} />
          }
        </> ||

        testEnd && (
          allAnswers.length &&
          <div>NICE</div> ||
          <div>loose</div>
        )
      }
    </>
  );
};

export default Survey;