import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import { questionsTakeRequest } from '../../../redux-saga/actions/questionsActions';
import { getAccountPendingSelector, getAccountSelector } from '../../../redux-saga/selectors/userSelector';
import { getMultfilmsPendingSelector } from '../../../redux-saga/selectors/multfilmsSelector';
import Test from './Test';
import Multfilms from './Multfilms';

const Progres = () => {
  const pendingAccount = useSelector(getAccountPendingSelector);
  const pendingMultfilms = useSelector(getMultfilmsPendingSelector);
  const authInfo = useSelector(getAccountSelector);
  const dispatch = useDispatch();
  const level = authInfo.involvement;

  const getInfo = async () => {
    if (authInfo.name && !authInfo.test_passed) {
      const action = {level, topic: 'newcomers'}
      dispatch(questionsTakeRequest(action));
    }
  };

  useEffect(() => {
    getInfo();
  }, [authInfo.test_passed]);

  return (
    <div>
      {!pendingAccount && authInfo
      && (
        (!authInfo.name && <span>Ты не авторизован</span>)
        || (!authInfo.test_passed && <Test />)
        || (!pendingMultfilms
          &&  <div className="multfilms_main">
                <Multfilms />
              </div>
            )
        )
      }
    </div>
  );
};

export default Progres;