import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { validateName, validateLogin, validatePassword } from '../../validate/authValidate';
import { userAuthorization } from '../../../redux-saga/actions/userActions';
import './styles.scss';

interface AcDate {
  name: string,
  login: string,
  password: string,
  involvement: string
}

const GlobalAuth = ({ ...prop }) => {
  const [typeForm, setTypeForm] = useState(prop.authVariant);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const authentication = async (date: AcDate) => {
    try {
      const dates = {
        name: date.name,
        login: date.login,
        password: date.password,
        involvement: date.involvement,
      };
      dispatch(userAuthorization({dates, typeForm}));
      
      prop.authClose();
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
                role="button"
                className="auth_button"
              >
                {t('head.buttons.login')}
              </div>
              <div
                onClick={() => (setTypeForm('registration'))}
                tabIndex={-2}
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