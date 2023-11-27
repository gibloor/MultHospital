import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { questOfferTakeRequest } from 'redux-saga/actions/offerActions'
import { multfilmsSelector } from 'redux-saga/selectors/multfilmsSelector'

import inputs from './inputs'

import './styles.scss'

interface Props {
  id: number
}

const QuestOffer = (props: Props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { id } = props

  const multfilms = useSelector(multfilmsSelector)

  const [options, setOptions] = useState<string[]>([])

  interface Dates {
    multfilm: string,
    question: string,
    answer: string,
    false1: string,
    false2: string,
  }

  const pushOffer = async (date: Dates) => {
    try {
      const { multfilm, question, answer, false1, false2 } = date
      dispatch(questOfferTakeRequest({
        multfilm, question, answer, false1, false2, id: id
      }))
      
    } catch (err: any) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    let sorted: string[] = []

    Object.keys(multfilms).forEach(category => {
      multfilms[category].forEach(multfilm => {
        if (multfilm.watched === true) {
          sorted.push(multfilm.name)
        }
      })
    })
    if (sorted.length) {
      setOptions(sorted)
    }
  }, [multfilms])

  return (
    <div className='questoffer'>
      {options.length &&
        <>
          <span className='questoffer__title title'>
            {t('offers.question.title')}
          </span>
          <Formik
            initialValues={{
              multfilm: options[0],
              question: '',
              answer: '',
              false1: '',
              false2: '',
            }}
            onSubmit={(values, { resetForm }) => { pushOffer(values); resetForm() }}
          >
            {({ errors, touched }: any) => (
              <Form className='questoffer__form'>
                <div className='questoffer__case'>
                  <Field as="select" name="multfilm" className='questoffer__replay questoffer__replay_long'>
                    {options.map(option => (
                      <option
                        key={option + 'Op'}
                        value={option}
                      >
                        {t(`multfilms.${option}.personal.title`)}
                      </option>
                    ))}
                  </Field>
                  {inputs.map(input => (
                    <Field
                      key={input.name}
                      as="textarea"
                      name={input.name}
                      validate={input.validator}
                      placeholder={t(`offers.question.inputs.${input.name}`)}
                      className={classNames(
                        { 'questoffer__replay': true },
                        { 'questoffer__replay_long': input.class === 'long' },
                        { 'questoffer__replay_short': input.class === 'short' },
                        { 'questoffer__error_border': errors[input.name] && touched[input.name] },
                      )}
                    />
                  ))}
                </div>
                <button type="submit" className="button__general">
                  {t('offers.button')}
                </button>
              </Form>
            )}
          </Formik>
        </>
      }
      { !options.length &&
        <span>
          {t('offers.errors.unavailable')}
        </span>
      }
    </div>
  )
}

export default QuestOffer