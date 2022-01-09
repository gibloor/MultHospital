import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from './Logo';
import Navigation from './Navigation';
import Authorization from './Navigation/AuthMenu/Authorization';

import { userAutoAuthRequire } from 'redux-saga/actions/userActions';
import { getAccountSelector } from 'redux-saga/selectors/userSelector';
import { multfilmTakeRequare } from 'redux-saga/actions/multfilmsActions';

import './styles.scss';

const Header = () => {

  const dispatch = useDispatch();

  const [authVariant, setAuthVariant] = useState('');
  const token = localStorage.getItem('token') || '';
  const authInfo = useSelector(getAccountSelector);

  const authClose = () => {
    setAuthVariant('');
  };
  const changeAuthVariant = (variant:string) => {
    setAuthVariant(variant);
  };

  useEffect(() => {
    (token && !authInfo.name)
    && dispatch(userAutoAuthRequire({token: token}));
  }, []);

  useEffect(() => {
    (authInfo.test_passed)
    && dispatch(multfilmTakeRequare({ id: authInfo.id }));
  }, [authInfo.test_passed]);

  return (
    <div className="head">
      <h1 className="head__h1">MultHospital</h1>
      <Logo />
      <Navigation changeAuthVariant={changeAuthVariant}/>
      {
        authVariant &&
        <Authorization
          authClose={authClose}
          authVariant={authVariant}
        />
      }
    </div>
  );
};

export default Header;