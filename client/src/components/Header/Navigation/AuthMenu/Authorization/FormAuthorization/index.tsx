import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { userAuthRequire } from 'redux-saga/actions/userActions';
import { getAccountSelector } from 'redux-saga/selectors/userSelector';

import { validateName, validateLogin, validatePassword } from 'components/validate/authValidate';

interface Props {
  authClose: () => void,
  typeForm: string,
};

interface AcDate {
  name: string,
  login: string,
  password: string,
};

const FormAuthorization = (props:Props) => {

  const [error, setError] = useState('');
  const [formType, setFormType] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const authInfo = useSelector(getAccountSelector);

  const typeForm = props.typeForm;

  const authentication = async (date: AcDate) => {
    try {
      const dates = {
        name: date.name,
        login: date.login,
        password: date.password,
      };
      dispatch(userAuthRequire({dates, typeForm}));
      setFormType(typeForm);      
      
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    (authInfo.name && props.authClose())
      || (formType === 'registration' && setError('already registered')
      || formType === 'login' && setError('wrond dates')
    );
  }, [authInfo]);

  return (
    <Formik
      initialValues={{
        name: '',
        login: '',
        password: '',
      }}
      onSubmit={(values) => {
        authentication(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="auth__form">
          <div className="auth__close_form">
            <button
              onKeyPress={() => props.authClose()}
              onClick={() => props.authClose()}
              className="auth__close_form_button"
              type="button"
            >
              X
            </button>
          </div>
          <span>{t(`head.buttons.${typeForm}`)}</span>
          <div className="auth__inputs">
            {(typeForm === 'registration'
            ) && (
              <>
                <label className="auth__text">Name</label>
                <Field name="name" validate={validateName} />
                {errors.name && touched.name && <span className="error_text">{errors.name}</span>}
              </>
            )}
            <label className="auth__text">Login</label>
            <Field name="login" validate={validateLogin} />
            {errors.login && touched.login && <span className="error_text">{errors.login}</span>}

            <label className="auth__text">Password</label>
            <Field name="password" validate={validatePassword} />
            {errors.password && touched.password && <span className="error_text">{errors.password}</span>}
          </div>
          <button type="submit">Submit</button>
          <span className="auth__error">{error}</span>
        </Form>
      )}
    </Formik>
  )
}

export default FormAuthorization;