import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import OutsideClickHandler from 'react-outside-click-handler'

import { userAuthRequire, userErrorCleaning } from 'redux-saga/actions/userActions'
import { getAccountSelector, getAuthErrorTypeSelector } from 'redux-saga/selectors/userSelector'

import inputs from './inputs'

import './styles.scss'

interface Props {
  authClose: () => void,
  typeForm: string,
}

interface AcDate {
  name: string,
  login: string,
  password: string,
  email: string,
}

const FormAuthorization = (props:Props) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const authInfo = useSelector(getAccountSelector)
  const error = useSelector(getAuthErrorTypeSelector)

  const [typeForm, setTypeForm] = useState(props.typeForm)

  const authentication = async (data: AcDate) => {
    try {
      const dates = {
        name: data.name,
        login: data.login,
        password: data.password,
        email: data.email,
      }
      
      dispatch(userAuthRequire({dates, typeForm}))  
    } catch (err: any) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    authInfo.name && props.authClose()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfo])

  return (
    <div className="auth">
      <OutsideClickHandler onOutsideClick={() => props.authClose()}>
        <Formik
          initialValues={{
            name: '',
            login: '',
            password: '',
            email: '',
          }}
          onSubmit={(values) => { authentication(values) }}
        >
          {({ errors, touched }: any) => (
            <Form className="auth__form">
              <div className="auth__close_form">
                <div
                  onKeyPress={() => props.authClose()}
                  onClick={() => props.authClose()}
                  className="auth__close_button close"
                >
                  X
                </div>
              </div>

              <span className="auth__form_name">
                {t(`head.buttons.${typeForm}`)}
              </span>

              <div className="auth__inputs">
                {inputs.map(input => (
                  (typeForm === 'registration' || input.signIn) &&
                  <div key={input.name} className="auth__input_case" >
                    <Field
                      name={input.name}
                      validate={input.validator}
                      placeholder={t(`head.authentication.${input.name}`)}
                      className={classNames(
                        { 'auth__input': !errors[input.name] || !touched[input.name] },
                        { 'auth__input auth__error_border': errors[input.name] && touched[input.name] },
                      )}
                    />
                    {errors[input.name] && touched[input.name] &&
                      <div className="auth__error_case">
                        <div className="auth__error_block">
                          <span className="auth__error_text">
                            {t(`head.authentication.errors.${input.name}.${errors[input.name]}`)}
                          </span>
                        </div>
                      </div>
                    }
                  </div>
                ))}
              </div>

              <button type="submit" className="auth__submit auth__input">
                {t(`head.buttons.${typeForm}`)}
              </button>
              
              <span
                onClick={() => ((
                  dispatch(userErrorCleaning()),
                  setTypeForm(typeForm === 'login' ? 'registration' : 'login')
                ))}
                className="auth__form_changer button"
              >
                {t(`head.buttons.${typeForm === 'login' ? 'registration' : 'login'}`)}
              </span>

              {error &&
                <span className="auth__global_error">
                  {t(`head.authentication.errors.used.${error}`)}
                </span>
              }
            </Form>
          )}
        </Formik>
      </OutsideClickHandler>
    </div>
  )
}

export default FormAuthorization