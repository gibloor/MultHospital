import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getMultfilmsSelector } from '../../../../redux-saga/selectors/multfilmsSelector';
import { getAccountIdSelector } from '../../../../redux-saga/selectors/userSelector';
import { viewedSaveRequest } from '../../../../redux-saga/actions/viewedActions';
import './styles.css';

const Multfilms = () => {
  const dispatch = useDispatch();
  const multfilms = useSelector(getMultfilmsSelector);
  const userId = useSelector(getAccountIdSelector);
  let viewed: string[] = [];
  let delayCounter = 0;

  useEffect(() => {
    // return function viewedSave() {
    //   (viewed.length) && dispatch(viewedSaveRequest({userId, viewed}));
    // }
  }, [multfilms])

  return (
    <div className="multfilms">
      {Object.keys(multfilms).map((category) => (
        <div key={category}>
          {multfilms[category].map((multfilm, index) => (
            index === 0 || multfilms[category][index-1].watched ? (
              <div
                key={multfilm.name}
                className='multfilm_block'
              >
                <div className={classNames(
                  { 'multfilm_unviewed': !multfilm.viewed },
                  { 'multfilm_viewed': multfilm.viewed }
                )}
                  style={{
                    animationDelay: `${delayCounter + 1}s`
                  }}
                /> 
                {!multfilm.viewed
                  && <div className="pour" 
                    style={{
                      animationDelay: `${delayCounter}s`
                    }}
                  />
                }
                {
                  !multfilm.viewed
                  && (delayCounter += 5)
                  && multfilm.watched
                  && viewed.push(multfilm.name)
                  && (multfilm.viewed = true)
                }
                <div className="multfilm_list">
                  {multfilm.watched
                    && <div className="multfilms_watched" key={multfilm.name}/>
                  }
                  <Link className="multfilms_image_block" to={`/multfilm?name=${multfilm.name}`}>
                    <img
                      alt={multfilm.logo}
                      className="multfilms_list_logo"
                      src={`${process.env.PUBLIC_URL}/assets/images/multPosters/${multfilm.logo}`}
                    />
                  </Link>
                  <span className="multfilm_name">
                    {multfilm.name}
                  </span>
                </div>
              </div>
            ) : <div key={multfilm.name} className="multfilm_block">
                  close
                </div>
          ))}
          {
            delayCounter=0
          }
        </div>
      ))}
    </div>
  )
}

export default Multfilms;