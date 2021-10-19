import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Multfilm } from '../../../../../redux-saga/types/multfilmsTypes';
import './styles.css';

interface Props {
  multfilm: Multfilm,
  viewedChange: (name:string) => void,
}

const MultfilmBlock = (props: Props) => {

  const multfilm = props.multfilm;

  useEffect(() => {
    !multfilm.viewed && props.viewedChange(multfilm.name), multfilm.viewed = true
  }, [])

  return (
    <div className='multfilm_block' >
      <div
        className={classNames(
          { 'multfilm_unviewed': !multfilm.viewed },
          { 'multfilm_viewed': multfilm.viewed }
        )}
        style={{
          animationDelay: `${multfilm.delay + 3}s`
        }}
      /> 
      {!multfilm.viewed
        && <>
          <div className="pour" 
            style={{
              animationDelay: `${multfilm.delay + 2}s`
            }}
          />
          <div className="multfilm_locked multfilm_opened" 
            style={{
              animationDelay: `${multfilm.delay}s`
            }}
          />
        </>
      }
      <div className="multfilm_list">
        {multfilm.watched
          && <div className="multfilms_watched" key={multfilm.name}/>
        }
        <Link className="multfilms_image_block" to={`/progres/multfilm?name=${multfilm.name}`}>
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
  )
}

export default MultfilmBlock