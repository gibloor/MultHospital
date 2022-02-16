import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userErrorCleaning } from 'redux-saga/actions/userActions';

import Logo from './Logo';
import Navigation from './Navigation';
import AuthForm from './AuthForm';

import './styles.scss';

const Header = () => {

  const dispatch = useDispatch();

  const [authVariant, setAuthVariant] = useState('');

  const authClose = () => {
    setAuthVariant('');
    dispatch(userErrorCleaning());
  };
  const changeAuthVariant = (variant:string) => {
    setAuthVariant(variant);
  };

  return (
    <div className="header">
      <h1 className="header__h1">Mult Hospital</h1>
      <Logo />
      <Navigation changeAuthVariant={changeAuthVariant}/>
      {authVariant &&
        <AuthForm
          authClose={authClose}
          typeForm={authVariant}
        />
      }
    </div>
  );
};

export default Header;