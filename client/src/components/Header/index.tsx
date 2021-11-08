import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from './Logo';
import Authorization from './Authorization';
import HeaderMenu from './HeaderMenu';

import { userAutoAuthRequire } from 'redux-saga/actions/userActions';
import { getAccountSelector } from 'redux-saga/selectors/userSelector';
import { multfilmTakeRequare } from 'redux-saga/actions/multfilmsActions';

import './style.scss';

const Header = () => {
  const [authVariant, setAuthVariant] = useState('');

  const token = localStorage.getItem('token') || '';

  const dispatch = useDispatch();
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
      <HeaderMenu changeAuthVariant={changeAuthVariant}/>
      {authVariant
      &&  <Authorization
            authClose={authClose}
            authVariant={authVariant}
          />
      }
    </div>
  );
};

export default Header;