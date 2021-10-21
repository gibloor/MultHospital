import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Multfilm } from '../../../../../redux-saga/types/multfilmsTypes';
import './styles.scss';

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
        &&
        <>
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
      <Link className="multfilm_list" to={`/progres/multfilm?name=${multfilm.name}`}>
        {multfilm.watched
          && <div className="multfilms_watched" key={multfilm.name}/>
        }
        <div className="multfilms_image_block">
          <img
            alt={multfilm.logo}
            className="multfilms_list_logo"
            src={`${process.env.PUBLIC_URL}/assets/images/multPosters/${multfilm.logo}`}
          />
        </div>
        <span className="multfilm_name">
          {multfilm.name}
        </span>
      </Link>
    </div>
  )
}

export default MultfilmBlock