import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Formik, Form, Field } from 'formik';
import { validateName, validateLogin, validatePassword } from '../../validate/authValidate';

interface Info {
  id: number,
  name: string,
  image: string, 
  features: string[],
  acsessToken: string
}
interface Prop {
  registVisibility: (boolean: boolean) => void,
  infoTaked: (info: Info) => void
};
interface AcDate {
  name: string,
  login: string,
  password: string
}

const Regist = (prop: Prop) => {

  const [error, setError] = useState('');

  const newLogin = async (dates: AcDate) => {
    try {
      const body = {
        name: dates.name,
        login: dates.login,
        password: dates.password
      };
      const response = await fetch("http://localhost:5000/accounts/regist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();

      if (typeof(jsonData) == 'string') {
        setError(jsonData)
      } else {
        prop.infoTaked(jsonData);
        prop.registVisibility(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className='login'>
      <OutsideClickHandler onOutsideClick={() => prop.registVisibility(false)}>
        <Formik
          initialValues={{
            name: '',
            login: '',
            password: '',
          }}
          onSubmit={values => {
            newLogin(values);
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className='login_form'>
              <span>Registration form</span>
              <div className="login_inputs">
                <label className="login_label">Name</label>
                <Field name="name" validate={validateName} />
                {errors.name && touched.name && <div>{errors.name}</div>}

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


export default Regist;