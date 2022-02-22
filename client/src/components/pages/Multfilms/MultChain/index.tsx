import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMultfilmsSelector } from 'redux-saga/selectors/multfilmsSelector';
import { getAccountIdSelector } from 'redux-saga/selectors/userSelector';
import { viewedSaveRequest } from 'redux-saga/actions/viewedActions';

import MultfilmBlock from './MultfilmBlock';

import './styles.scss';

const MultChain = () => {
  const dispatch = useDispatch();
  const multfilms = useSelector(getMultfilmsSelector);
  const userId = useSelector(getAccountIdSelector);

  let viewed: string[] = [];

  const viewedChange = (name: string) => {
    viewed.push(name)
  };

  useEffect(() => {
    return function viewedSave() {
      (viewed.length) && dispatch(viewedSaveRequest({userId, viewed}));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="multChain">
      {Object.keys(multfilms).map((category) => (
        <div key={category}>
          {multfilms[category].map((multfilm, index) => (
            index === 0 || multfilms[category][index-1].watched ?
              <MultfilmBlock
                multfilm={multfilm}
                viewedChange={viewedChange}
                key={multfilm.name}
              />
              :
              <div
                key={multfilm.name}
                className="multfilm__block multfilm__locked"
              />
          ))}
        </div>
      ))}
    </div>
  )
}

export default MultChain;