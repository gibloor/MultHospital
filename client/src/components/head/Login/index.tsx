import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Formik, Form, Field } from 'formik';
import { validateLogin, validatePassword } from '../../validate/authValidate';

interface Info {
  id: number,
  name: string,
  image: string, 
  features: string[],
  acsessToken: string
}
interface Prop {
  loginVisibility: (boolean: boolean) => void,
  infoTaked: (info: Info) => void
}
interface AcDate {
  login: string,
  password: string
}

const Login = (prop: Prop) => {

  const [error, setError] = useState('');

  const auth = async (dates: AcDate) => {
    try {
      const body = {
        login: dates.login,
        password: dates.password
      };
      const response = await fetch("http://localhost:5000/accounts/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      if (typeof(jsonData) == 'string') {
        setError(jsonData)
      } else {
        prop.infoTaked(jsonData);
        prop.loginVisibility(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className='login'>
      <OutsideClickHandler onOutsideClick={() => prop.loginVisibility(false)}>
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          onSubmit={values => {
            auth(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className='login_form'>
              <span>Login form</span>
              <div className="login_inputs">

                <label className="login_label">Login</label>
                <Field name="login" validate={validateLogin} />
                {errors.login && touched.login && <div>{errors.login}</div>}

                <label className="login_label">Password</label>
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
      </OutsideClickHandler>
    </div>
  )
}

export default Login;