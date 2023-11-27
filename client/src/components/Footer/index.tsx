import React from 'react'

import github from './gitHub.png'
import linkedIn from './linkedIn.png'
import telegram from './telegram.png'

import './styles.scss'

const Footer = () => {

  return (
    <div className="footer text">
      <div className='footer__case'>
        <div className='footer__links'>
          <a href='https://www.linkedin.com/in/nikita-kubrakov-131792213/' target="_blank" className='footer__link'>
            <img alt='LinkedIn' src={linkedIn} />
          </a>

          <a href='https://github.com/gibloor' target="_blank" className='footer__link'>
            <img alt='GitHub' src={github} />
          </a>
          
          <a href='https://t.me/gibloor' target="_blank" className='footer__link'>
            <img alt='Telegram' src={telegram} />
          </a>
        </div>

        <div className='footer__contacts'>
          <span>
            Email: nikitakubrakou@gmail.com
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer