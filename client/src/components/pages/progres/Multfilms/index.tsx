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

  useEffect(() => {
    return function viewedSave() {
      (viewed.length) && dispatch(viewedSaveRequest({userId, viewed}));
    }
  }, [])

  return (
    <div className="multfilms">
      {Object.keys(multfilms).map((category) =>(
        <div key={category} className="multfilms_line">
          {multfilms[category].map((multfilm, index) => (
            index === 0 || multfilms[category][index-1].watched === true ? (
              <div
                key={multfilm.name}
                className={classNames(
                  'multfilm_block',
                  { 'multfilm_unviewed': !multfilm.viewed },
                  { 'multfilm_viewed': multfilm.viewed }
                )}
              >
                {multfilm.watched && !multfilm.viewed && viewed.push(multfilm.name) && (multfilm.viewed = true)}
                <div className="multfilm_list multfilm_active">
                  <div className="pour"></div>
                  {
                    multfilm.watched
                    && <div className="multfilms_watched" key={multfilm.name}/>
                  }
                  <Link className="multfilms_list_block" to={`/multfilm?name=${multfilm.name}`}>
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
            ) : <div key={multfilm.name} className="multfilm_block multfilm_deactive">
                  close
                </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Multfilms;