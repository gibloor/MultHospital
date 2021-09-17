import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Formik, Form, Field } from 'formik';
import { validateName, validateLogin, validatePassword } from '../../validate/authValidate';
import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { userAuth } from '../../../redux-saga/actions/userActions';

interface Info {
  id: number,
  name: string,
  image: string, 
  features: string[],
  acsessToken: string,
  test_passed: boolean,
  involvement: string
}
interface Prop {
  authClose: () => void,
  infoTaked: (info: Info) => void,
  authVariant: string
};
interface AcDate {
  name: string,
  login: string,
  password: string
}

const GlobalAuth = (prop: Prop) => {

  const [error, setError] = useState('');
  const [typeForm, setTypeForm] = useState(prop.authVariant);

  const dispatch = useDispatch();

  const  authentication = async (dates: AcDate) => {
    try {
      const body = {
        name: dates.name,
        login: dates.login,
        password: dates.password
      };
      const response = await fetch("http://localhost:5000/accounts/"+typeForm, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      if (typeof(jsonData) == 'string') {
        setError(jsonData)
      } else {
        prop.infoTaked(jsonData);
        const info = {pending: false, error: false, info:jsonData}
        dispatch(userAuth(info));
        prop.authClose();
      }
    } catch (err: any) {
      console.error(err.message);
    }
  }

  const { t } = useTranslation();

  return (
    <div className='auth'>
      <OutsideClickHandler onOutsideClick={() => prop.authClose()}>
        {
          (typeForm === 'something' && 
            <div className="auth_form">
              <p onClick={() => (setTypeForm('login'))}>
                {t("head.buttons.login")}
              </p>
              <p onClick={() => (setTypeForm('registration'))}>
                {t("head.buttons.registration")}
              </p>
            </div>
          )
          ||
          <Formik
            initialValues={{
              name: '',
              login: '',
              password: '',
            }}
            onSubmit={values => {
              authentication(values);
            }}
          >
            {({ errors, touched, isValidating }) => (
              <Form className='auth_form'>
                <span>{t("head.buttons." + typeForm)}</span>
                <div className="auth_inputs">
                  {typeForm === "registration" &&
                    <>
                      <label className="auth_label">Name</label>
                      <Field name="name" validate={validateName} />
                      {errors.name && touched.name && <div>{errors.name}</div>}
                    </>
                  }
                  <label className="auth_label">Login</label>
                  <Field name="login" validate={validateLogin} />
                  {errors.login && touched.login && <div>{errors.login}</div>}

                  <label className="auth_label">Password</label>
                  <Field name="password" validate={validatePassword} />
                  {errors.password && touched.password && <div>{errors.password}</div>}
                </div>
                <button type="submit">Submit</button>
                {error && 
                  <span>{error}</span>
                }
              </Form>
            )}
          </Formik>
        }
      </OutsideClickHandler>
    </div>
  )
}


export default GlobalAuth;