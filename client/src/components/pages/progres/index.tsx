import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import { useDispatch } from 'react-redux';
import { questionsTakeRequest } from '../../../redux-saga/actions/questionsActions'
import { getAccountSelector } from '../../../redux-saga/selectors/accountSelector';
import Test from './Test';
const Progres = () => {

  interface Multfilm {
    id: number,
    name: string,
    logo: string,
    involvement: string,
    popularity: string,
    image_direction: string
  }

  interface Topic {
    topic: string
  } 

  const dispatch = useDispatch();

  const [multfilms, setMultfilms] = useState<Multfilm[]>([]);
  const authInfo = useSelector(getAccountSelector);

  let topic:Topic = {
    topic: authInfo.involvement
  }
 
  const getMultfilms = async () => {
    try {
      const response = await fetch("http://localhost:5000/multfilms");
      const jsonData = await response.json();
      setMultfilms(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    authInfo.test_passed && getMultfilms();
    !authInfo.test_passed && dispatch(questionsTakeRequest(topic));
  }, [authInfo]);

  return (
    <div className="multfilms">
      {(!authInfo.name && <span>Ты не авторизован</span>)
        ||
       (!authInfo.test_passed && <Test/>)
        ||
       (multfilms.sort((a, b) => a.name > b.name ? 1 : -1)
                  .sort((a, b) => a.popularity > b.popularity ? 1 : -1)
                  .map(multfilm => (
          <div className={'multfilms_list '+ multfilm.image_direction} key={multfilm.id}>
            <div className={'multfilms_list_block '+ multfilm.image_direction}>
              <img alt={multfilm.logo} className='multfilms_list_logo' src={multfilm.logo} />
            </div>
            <span>{multfilm.name}</span>
          </div>
        )))
      }
    </div>
  )
}

export default Progres;