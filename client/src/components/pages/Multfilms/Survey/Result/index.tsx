import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './styles.scss';

interface Props {
  surveyResult: number,
};

interface MessagePool {
  [key: string]: string[]
}

const Result = (props: Props) => {

  const { t } = useTranslation();

  const { surveyResult } = props;

  const [result, setResult] = useState('');
  const [message, setMessage] = useState(0);

  const messagePool: MessagePool = {
    victory: [
      'Frog',
      'Zoos',
      'Tanya',
      'KaijiF',
      'Scheimpough',
      'WellDoneMen',
      'Kevin',
      'MrSlave',
      'Jake',
      'LaserDog'
    ],
    losing: [
      'Daria',
      'Boss',
      'Benson',
      'Harli',
      'HardWorker',
      'Tokk',
      'Bender',
      'Pickle',
      'Charli',
      'Aqua'
    ],
  }

  useEffect(() => {
    if (surveyResult) {
      setResult('victory');
    } else {
      setResult('losing');
    };

    const messageNumber = Math.floor(Math.random() * 10);
    setMessage(messageNumber);
  }, []);

  return (
    <div className='result'>
      {message &&
        <>
        <div className='result__message_case'>
          <img className='result__img' src={`/assets/images/result/${result}/${messagePool[result][message]}.png`} />
          <span className='result__special_message'>
            {t(`result.${result}.${messagePool[result][message]}`)}
          </span>
        </div>
          <span className='result__message'>
            {t(`result.${result}.message`)}
          </span>
          <Link to='/multfilms' className='button__general result__button'>
            {t('result.button')}
          </Link>
        </>
      }
    </div>
  )
}

export default Result;