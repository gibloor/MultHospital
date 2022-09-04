import React from 'react';
import { useSelector } from 'react-redux';

import {
  getAccountPendingSelector,
  getAccountSelector
} from 'redux-saga/selectors/userSelector';

import GreetNew from './GreetNew';
import Survey from './Survey';
import MultChain from './MultChain';

import './styles.scss';

const Multfilms = () => {

  const authInfo = useSelector(getAccountSelector);
  const pendingAccount = useSelector(getAccountPendingSelector);

  return (
    <div className="multfilms">
      {!pendingAccount &&
        (
          (!authInfo.name && <span data-testid='multfilms-page-off'>Ты не авторизован</span>) ||
          (!authInfo.level && <GreetNew />) ||
          (!authInfo.test_passed && <Survey topic='newcomers' />) ||
          (<MultChain />)
        )
      }
    </div>
  );
};

export default Multfilms;