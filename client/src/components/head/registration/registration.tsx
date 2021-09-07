import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './registration.css';

interface Visibility {
  registVisibility: (boolean: boolean) => void;
}

const Regist = (visibility: Visibility) => {

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
        credentials: 'include',
        body: JSON.stringify(body)
      });
      window.location.href = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className='login'>
      <OutsideClickHandler 
        onOutsideClick={() => visibility.registVisibility(false)}
      >
        <form onSubmit={(e) => newLogin(e)}>
          <span>Registration form</span>
          <div className='login_inputs'>
            <span>Name</span>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <span>Login</span>
            <input type='text' value={login} onChange={e => setLogin(e.target.value)}></input>
            <span>Password</span>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)}></input>
          </div>
          <input type='submit' value='Submit'></input>
        </form>
      </OutsideClickHandler>
    </div>
  )
}


export default Regist;