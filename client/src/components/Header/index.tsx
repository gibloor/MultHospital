import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from './Logo';
import Navigation from './Navigation';
import Authorization from './Navigation/AuthMenu/Authorization';

import { getAccountSelector } from 'redux-saga/selectors/userSelector';
import { multfilmTakeRequare } from 'redux-saga/actions/multfilmsActions';

import './styles.scss';

const Header = () => {

  const dispatch = useDispatch();

  const [authVariant, setAuthVariant] = useState('');
  const authInfo = useSelector(getAccountSelector);

  const authClose = () => {
    setAuthVariant('');
  };
  const changeAuthVariant = (variant:string) => {
    setAuthVariant(variant);
  };

  useEffect(() => {
    (authInfo.test_passed) &&
    dispatch(multfilmTakeRequare({ id: authInfo.id }));
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfo.test_passed]);

  return (
    <div className="head">
      <h1 className="head__h1">Mult Hospital</h1>
      <Logo />
      <Navigation changeAuthVariant={changeAuthVariant}/>
      {authVariant &&
        <Authorization
          authClose={authClose}
          authVariant={authVariant}
        />
      }
    </div>
  );
};

export default Header;