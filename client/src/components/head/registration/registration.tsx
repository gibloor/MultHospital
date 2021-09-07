import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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




function validateName(value: string) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z._%+-]{6,14}$/i.test(value)) {
    error = 'Invalide name';
  }
  return error;
}
function validateLogin(value: string) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]{6,14}$/i.test(value)) {
    error = 'Invalid login';
  }
  return error;
}
function validatePassword(value: string) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]{6,14}$/i.test(value)) {
    error = 'Invalid password';
  }
  return error;
}





const Regist = (prop: Prop) => {

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const newLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { name, login, password };
      const response = await fetch("http://localhost:5000/accounts/regist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      prop.infoTaked(jsonData);

    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className='login'>
      <OutsideClickHandler 
        onOutsideClick={() => prop.registVisibility(false)}
      >
        <form className="login_form" onSubmit={(e) => (newLogin(e), prop.registVisibility(false)) }>
          <span>Registration form</span>
          <div className='login_inputs'>
            <span>Name</span>
            <input 
              type='text'
              value={name} 
              onChange={e => setName(e.target.value)} 
            >
            </input>
            <span>Login</span>
            <input 
              type='text' 
              value={login} 
              onChange={e => setLogin(e.target.value)} 
            >
            </input>
            <span>Password</span>
            <input
              type='password'
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            >
            </input>
          </div>
          <input type='submit' value='Submit'></input>
        </form>

        <Formik
          initialValues={{
            name: '',
            login: '',
            password: '',
          }}
          onSubmit={values => {
            
            console.log(values);
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <Field name="name" validate={validateName} />
              {errors.name && touched.name && <div>{errors.name}</div>}

              <Field name="login" validate={validateLogin} />
              {errors.login && touched.login && <div>{errors.login}</div>}

              <Field name="password" validate={validatePassword} />
              {errors.password && touched.password && <div>{errors.password}</div>}
    
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </OutsideClickHandler>
    </div>
  )
}


export default Regist;