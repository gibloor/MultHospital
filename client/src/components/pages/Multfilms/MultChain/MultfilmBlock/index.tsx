import React, { useEffect } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Multfilm } from 'redux-saga/types/multfilmsTypes'

import './styles.scss'

interface Props {
  multfilm: Multfilm,
  viewedChange: (name:string) => void,
}

const MultfilmBlock = (props: Props) => {

  const { multfilm, viewedChange } = props

  useEffect(() => {
    if (!multfilm.viewed) {
      viewedChange(multfilm.name)
      multfilm.viewed = true
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='multfilm__block' >
      <div className='water_animation'>
        <div
          className={classNames(
            { 'multfilm__unviewed': !multfilm.viewed },
            { 'multfilm__viewed': multfilm.viewed }
          )}
          style={{ animationDelay: `${multfilm.delay + 3}s` }}
        /> 
        {!multfilm.viewed &&
          <>
            <div className="pour" 
              style={{ animationDelay: `${multfilm.delay + 2}s` }}
            />
            <div className="multfilm__locked multfilm__opened" 
              style={{ animationDelay: `${multfilm.delay}s` }}
            />
          </>
        }
      </div>
      <Link className="multfilm__list" to={`/multfilms/${multfilm.level}/${multfilm.name}`}>
        {multfilm.watched &&
          <div className="multfilm__watched" key={multfilm.name}/>
        }
        <div className="multfilm__image_block">
          <img
            alt={multfilm.name}
            className="multfilm__list_logo"
            src={`assets/images/multfilms/${multfilm.name}/multPosters/${multfilm.name}.png`}
          />
        </div>
      </Link>
    </div>
  )
}

export default MultfilmBlock