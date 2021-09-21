import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import { questionsTakeRequest } from '../../../redux-saga/actions/questionsActions';
import { getAccountPendingSelector, getAccountSelector } from '../../../redux-saga/selectors/userSelector';
import Test from './Test';

const Progres = () => {
  interface Multfilm {
    id: number,
    name: string,
    logo: string,
    involvement: string,
    popularity: string,
    direction: string,
    reduction: string,
    viewed: boolean,
  }

  interface Topic {
    level: string,
  }

  const pending = useSelector(getAccountPendingSelector);
  const dispatch = useDispatch();
  const [multfilms, setMultfilms] = useState<Multfilm[]>();
  const authInfo = useSelector(getAccountSelector);
  const level:Topic = {
    level: authInfo.involvement,
  };

  const getInfo = async () => {
    if (authInfo.test_passed) {
      try {
        const response = await fetch('http://localhost:5000/multfilms');
        const jsonData = await response.json();
        setMultfilms(jsonData);
      } catch (err: any) {
        console.error(err.message);
      }
    } else if (authInfo.name) {
      dispatch(questionsTakeRequest(level));
    }
  };

  useEffect(() => {
    getInfo();
  }, [authInfo.test_passed, authInfo.name]);
  // .sort((a, b) => (a.name > b.name ? 1 : -1))
  // .sort((a, b) => (a.popularity > b.popularity ? 1 : -1))

  return (
    <div className="multfilms">
      {!pending && authInfo
      && (
        (!authInfo.name && <span>Ты не авторизован</span>)
        || (!authInfo.test_passed && <Test />)
        || (multfilms && multfilms.map((multfilm) => (
          <div key={multfilm.id} className={`multfilms_list ${multfilm.direction}`}>
            {authInfo.features
            && authInfo.features.map((features) => (
              features === multfilm.reduction && <div>fuck</div>
            ))}
            <div className={`multfilms_list_block ${multfilm.direction}`}>
              <img alt={multfilm.logo} className="multfilms_list_logo" src={multfilm.logo} />
            </div>
            <span>
              {multfilm.name}
            </span>
          </div>
        ))))}
    </div>
  );
};

export default Progres;