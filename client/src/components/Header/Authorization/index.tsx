import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { validateName, validateLogin, validatePassword } from '../../validate/authValidate';
import { userAuthorization } from '../../../redux-saga/actions/userActions';
import { getAccountSelector } from '../../../redux-saga/selectors/userSelector';
import './styles.scss';

interface AcDate {
  name: string,
  login: string,
  password: string,
  involvement: string
}

const Authorization = ({ ...prop }) => {
  const [typeForm, setTypeForm] = useState(prop.authVariant);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const authInfo = useSelector(getAccountSelector);
  const [error, setError] = useState('');
  const [formType, setFormType] = useState('');

  const authentication = async (date: AcDate) => {
    try {
      const dates = {
        name: date.name,
        login: date.login,
        password: date.password,
        involvement: date.involvement,
      };
      dispatch(userAuthorization({dates, typeForm}));
      setFormType(typeForm);      
      
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    (authInfo.name && prop.authClose()) || (
      formType === 'registration' && setError('already registered')
      || formType === 'login' && setError('wrond dates')
    );
  }, [authInfo, formType]);

  return (
    <div className="auth">
      <OutsideClickHandler onOutsideClick={() => prop.authClose()}>
        {
          (typeForm === 'something'
            && (
            <div className="auth_form">
              <div className="close_form">
                <button
                  onKeyPress={() => prop.authClose()}
                  onClick={() => prop.authClose()}
                  className="close_form_button"
                  type="button"
                >
                  X
                </button>
              </div>
              <h3
                onKeyPress={() => (setTypeForm('login'))}
                onClick={() => (setTypeForm('login'))}
                tabIndex={0}
                role="button"
                className="auth_button"
              >
                {t('head.buttons.login')}
              </h3>
              <h3
                onKeyPress={() => (setTypeForm('registration'))}
                onClick={() => (setTypeForm('registration'))}
                tabIndex={0}
                role="button"
                className="auth_button"
              >
                {t('head.buttons.registration')}
              </h3>
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
                  <div className="close_form">
                    <button
                      onKeyPress={() => prop.authClose()}
                      onClick={() => prop.authClose()}
                      className="close_form_button"
                      type="button"
                    >
                      X
                    </button>
                  </div>
                  <h3>{t(`head.buttons.${typeForm}`)}</h3>
                  <div className="auth_inputs">
                    {(typeForm === 'registration'
                    ) && (
                      <>
                        <label className="auth_text">Name</label>
                        <Field name="name" validate={validateName} />
                        {errors.name && touched.name && <h4 className="error_text">{errors.name}</h4>}
                      </>
                    )}
                    <label className="auth_text">Login</label>
                    <Field name="login" validate={validateLogin} />
                    {errors.login && touched.login && <h4 className="error_text">{errors.login}</h4>}

                    <label className="auth_text">Password</label>
                    <Field name="password" validate={validatePassword} />
                    {errors.password && touched.password && <h4 className="error_text">{errors.password}</h4>}
                  </div>
                  <button type="submit">Submit</button>
                  <h4 className="error_text">{error}</h4>
                </Form>
              )}
            </Formik>
          )
        }
      </OutsideClickHandler>
    </div>
  );
};

export default Authorization;