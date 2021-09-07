import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './login.css';

interface Info {
  id: number,
  login: string,
  name: string,
  password: string, 
  image: string, 
  features: string[]
}

interface Prop {
  loginVisibility: (boolean: boolean) => void,
  infoTaked: (info: Info) => void
}

const Login = (prop: Prop) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const auth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/accounts/auth/${login}/${password}`);
      const jsonData = await response.json();
      console.log(jsonData);
      prop.infoTaked(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className='login'>
      <OutsideClickHandler 
        onOutsideClick={() => prop.loginVisibility(false)}
      >
        <form className="login_form" onSubmit={(e) => (auth(e), prop.loginVisibility(false))}>
          <span>Login form</span>
          <div className='login_inputs'>
            <span>Login</span>
            <input type='text' value={login} onChange={e => setLogin(e.target.value)}></input>
            <span>Password</span>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)}></input>
          </div>
          <input type='submit' value='Submit'/>
        </form>
      </OutsideClickHandler>
    </div>
  )
}

export default Login;