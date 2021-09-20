import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import { questionsTakeRequest } from '../../../redux-saga/actions/questionsActions';
import { getAccountSelector } from '../../../redux-saga/selectors/accountSelector';
import Test from './Test';

const Progres = () => {
  interface Multfilm {
    id: number,
    name: string,
    logo: string,
    involvement: string,
    popularity: string,
    direction: string,
  }

  interface Topic {
    level: string,
  }

  const dispatch = useDispatch();
  const [multfilms, setMultfilms] = useState<Multfilm[]>([]);
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
    } else {
      dispatch(questionsTakeRequest(level));
    }
  };

  useEffect(() => {
    getInfo();
  }, [authInfo]);

  // .sort((a, b) => (a.name > b.name ? 1 : -1))
  // .sort((a, b) => (a.popularity > b.popularity ? 1 : -1))

  return (
    <div className="multfilms">
      {(!authInfo.name && <span>Ты не авторизован</span>)
        || (!authInfo.test_passed && <Test />)
        || (
          multfilms.map((multfilm) => (
            <div className={`multfilms_list ${multfilm.direction}`} key={multfilm.id}>
              <div className={`multfilms_list_block ${multfilm.direction}`}>
                <img alt={multfilm.logo} className="multfilms_list_logo" src={multfilm.logo} />
              </div>
              <span>{multfilm.name}</span>
            </div>
          ))
        )}
    </div>
  );
};

export default Progres;