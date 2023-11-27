import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getQuestions } from 'redux-saga/selectors/questionsSelector'
import { getAccountSelector } from 'redux-saga/selectors/userSelector'
import { multfilmTestingRequire } from 'redux-saga/actions/multfilmsActions'
import { questionsTakeRequest } from 'redux-saga/actions/questionsActions'

import Timer from './Timer'
import Result from './Result'

import lazy from 'components/assets/survey/lazy.png'

import './styles.scss'

interface Props {
  topic: string,
  multLevel?: number,
}

const Survey = (props: Props) => {

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [allAnswers, setAllAnswers] = useState<string[]>([])
  const [userAnswer, setUserAnswer] = useState('')
  const [counter, setCounter] = useState(0)
  const [result, setResult] = useState(false)
  
  const questions = useSelector(getQuestions)
  const user = useSelector(getAccountSelector)

  const { level, test_passed, name } = user
  const { topic, multLevel } = props

  const submitQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    if (userAnswer === 'right') {
      setAllAnswers([questions[counter].multfilm, ...allAnswers])
    }
    setCounter(counter + 1)
  }

  const counterChange = () => {
    setCounter(counter + 1)
  }

  const freeWin = () => {
    dispatch(multfilmTestingRequire({
      features: [topic],
      userId: user.id,
      topic, 
      userLevel: level,
      multLevel
    }))
  }

  useEffect(() => {
    if (name) {
      dispatch(questionsTakeRequest({ level, topic }))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test_passed, level])

  useEffect(() => {
    if (counter === questions.length && counter !== 0) {
      let answers = allAnswers

      if (topic !== 'newcomers') {
        if (allAnswers.length > questions.length * 0.75) {
          answers = [allAnswers[0]]
        } else {
          answers = []
          setAllAnswers([])
        }
        setResult(true)
      }
      dispatch(multfilmTestingRequire({
        features: answers,
        userId: user.id,
        topic, 
        userLevel: level,
        multLevel
      }))
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  return (
    <>
      {
        (topic !== 'newcomers' && (questions.length < 10 || (questions[counter] && questions[counter].question == null)) &&
          <div className='survey'>
            <img src={lazy} alt='lazy character' className='survey__lazy' />
            <p>
              { t('survey.lazy.text')}
            </p>
            <Link to='/multfilms'>
              <button className='button__general' onClick={() => freeWin()}>
                { t('survey.lazy.button')}
              </button>
            </Link>
          </div>
        ) || (
          (counter < questions.length &&
            <>
            <form className="survey" onSubmit={(e) => submitQuestion(e)}>
              <span className="survey__question">
                { t(`multfilms.${questions[counter].multfilm}.questions.${level}.${questions[counter].question}.question`)}
              </span>
              <img
                alt={questions[counter].topic}
                className="survey__image"
                src={`/assets/images/multfilms/${questions[counter].multfilm}/multTests/${level}/${questions[counter].question}.png`}
              />
              <div className="survey__answers">
                {questions[counter].answers.map((answer, index) => (
                  <div className="survey__answer close" key={answer}>
                    <label
                      htmlFor={`answer_button_${index}`}
                      className="text"
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
              <div className="survey__answer close">
                <label
                  htmlFor='answer_button_dontnow'
                  className="text"
                >
                  I don't now
                </label>
                <input
                  className="survey__answer_button"
                  type="submit"
                  onClick={() => setUserAnswer('')}
                  id='answer_button_dontnow'
                />
              </div>
            </form>
            {topic !== 'newcomers' &&
              <Timer counterChange={counterChange} counter={counter} />
            }
          </>
          ) ||  (
            result &&
            <Result surveyResult = {allAnswers.length} />
          )
        )
      }
    </>
  )
}

export default Survey