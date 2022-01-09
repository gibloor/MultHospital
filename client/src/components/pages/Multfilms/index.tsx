import React from 'react';
import { useSelector } from 'react-redux';

import { getAccountPendingSelector, getAccountSelector } from 'redux-saga/selectors/userSelector';
import { getMultfilmsPendingSelector } from 'redux-saga/selectors/multfilmsSelector';

import GreetNew from 'components/pages/Multfilms/GreetNew';
import Survey from './Survey';
import MultChain from './MultChain';

import './styles.scss';

const Multfilms = () => {
  const pendingAccount = useSelector(getAccountPendingSelector);
  const pendingMultfilms = useSelector(getMultfilmsPendingSelector);
  const authInfo = useSelector(getAccountSelector);

  return (
    <div className="multfilms">
      {!pendingAccount &&
        (
          (!authInfo.name && <span>Ты не авторизован</span>) ||
          (!authInfo.involvement && <GreetNew />) ||
          (!authInfo.test_passed && <Survey topic='newcomers' />) ||
          (!pendingMultfilms &&  <MultChain />)
        )
      }
    </div>
  );
};

export default Multfilms;