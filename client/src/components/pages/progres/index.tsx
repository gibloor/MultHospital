import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import { questionsTakeRequest } from '../../../redux-saga/actions/questionsActions';
import { multfilmTakeRequare } from '../../../redux-saga/actions/multfilmsActions';
import { getAccountPendingSelector, getAccountSelector } from '../../../redux-saga/selectors/userSelector';
import { getMultfilmsPendingSelector } from '../../../redux-saga/selectors/multfilmsSelector';
import Test from './Test';
import Pipe from './Pipe';
import Multfilms from './Multfilms';

const Progres = () => {
  const pendingAccount = useSelector(getAccountPendingSelector);
  const pendingMultfilms = useSelector(getMultfilmsPendingSelector);
  const authInfo = useSelector(getAccountSelector);
  const dispatch = useDispatch();
  const level = authInfo.involvement;

  const getInfo = async () => {
    // if (authInfo.test_passed) {
    //   dispatch(multfilmTakeRequare({ id: authInfo.id }));
    // } else 
    if (authInfo.name && !authInfo.test_passed) {
      const action = {level, topic: 'newcomers'}
      dispatch(questionsTakeRequest(action));
    }
  };

  useEffect(() => {
    getInfo();
  }, [authInfo.test_passed, authInfo.name]);

  return (
    <div>
      {!pendingAccount && authInfo
      && (
        (!authInfo.name && <span>Ты не авторизован</span>)
        || (!authInfo.test_passed && <Test />)
        || (!pendingMultfilms
          &&  <div className="multfilms_main">
                <Pipe />
                <Multfilms />
              </div>
            )
        )
      }
    </div>
  );
};

export default Progres;