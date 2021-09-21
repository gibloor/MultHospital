import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { validateName, validateLogin, validatePassword } from '../../validate/authValidate';
import { userRequare, userTestComplete } from '../../../redux-saga/actions/userActions';

interface AcDate {
  name: string,
  login: string,
  password: string,
  involvement: string
}

const GlobalAuth = ({ ...prop }) => {
  const [error, setError] = useState('');
  const [typeForm, setTypeForm] = useState(prop.authVariant);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const authentication = async (dates: AcDate) => {
    try {
      const body = {
        name: dates.name,
        login: dates.login,
        password: dates.password,
        involvement: dates.involvement,
      };
      const response = await fetch(`http://localhost:5000/accounts/${typeForm}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      if (typeof (jsonData) === 'string') {
        setError(jsonData);
      } else {
        prop.infoTaked(jsonData.acsessToken);
        dispatch(userTestComplete({ feature: [] }));
        dispatch(userRequare({ ...jsonData }));
        prop.authClose();
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="auth">
      <OutsideClickHandler onOutsideClick={() => prop.authClose()}>
        {
          (typeForm === 'something'
            && (
            <div className="auth_form">
              <div
                onClick={() => (setTypeForm('login'))}
                tabIndex={-1}
                onKeyDown={() => (setTypeForm('login'))}
                role="button"
                className="auth_button"
              >
                {t('head.buttons.login')}
              </div>
              <div
                onClick={() => (setTypeForm('registration'))}
                tabIndex={-2}
                onKeyDown={() => (setTypeForm('registration'))}
                role="button"
                className="auth_button"
              >
                {t('head.buttons.registration')}
              </div>
            </div>
            )) || (
            <Formik
              initialValues={{
                name: '',
                login: '',
                password: '',
                involvement: localStorage.getItem('involvement') || 'I don`t now',
              }}
              onSubmit={(values) => {
                authentication(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="auth_form">
                  <span>{t(`head.buttons.${typeForm}`)}</span>
                  <div className="auth_inputs">
                    {(typeForm === 'registration'
                    ) && (
                      <>
                        <p className="auth_button">Name</p>
                        <Field name="name" validate={validateName} />
                        {errors.name && touched.name && <div>{errors.name}</div>}
                      </>
                    )}
                    <p className="auth_button">Login</p>
                    <Field name="login" validate={validateLogin} />
                    {errors.login && touched.login && <div>{errors.login}</div>}

                    <p className="auth_button">Password</p>
                    <Field name="password" validate={validatePassword} />
                    {errors.password && touched.password && <div>{errors.password}</div>}
                  </div>
                  <button type="submit">Submit</button>
                  {error && <span>{error}</span>}
                </Form>
              )}
            </Formik>
          )
        }
      </OutsideClickHandler>
    </div>
  );
};

export default GlobalAuth;