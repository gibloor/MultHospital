import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Multfilm } from 'redux-saga/types/multfilmsTypes';

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
    <div className='multfilm__block' >
      <div
        className={classNames(
          { 'multfilm__unviewed': !multfilm.viewed },
          { 'multfilm__viewed': multfilm.viewed }
        )}
        style={{ animationDelay: `${multfilm.delay + 3}s` }}
      /> 
      {!multfilm.viewed
        &&
        <>
          <div className="pour" 
            style={{ animationDelay: `${multfilm.delay + 2}s` }}
          />
          <div className="multfilm__locked multfilm__opened" 
            style={{ animationDelay: `${multfilm.delay}s` }}
          />
        </>
      }
      <Link className="multfilm__list" to={`/progres/multfilm?name=${multfilm.name}`}>
        {multfilm.watched
          && <div className="multfilm__watched" key={multfilm.name}/>
        }
        <div className="multfilm__image_block">
          <img
            alt={multfilm.logo}
            className="multfilm__list_logo"
<<<<<<< HEAD
            src={`assets/images/multPosters/${multfilm.logo}`}
=======
            src={`${process.env.PUBLIC_URL}/assets/images/multPosters/${multfilm.logo}`}
>>>>>>> liveBranch
          />
        </div>
        <span className="multfilm__name">
          {multfilm.name}
        </span>
      </Link>
    </div>
  )
}

export default MultfilmBlock