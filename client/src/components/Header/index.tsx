import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';
import { useDispatch, useSelector } from 'react-redux';

import { pagesList } from './pagesList';
import { userAuth, userDeauth } from '../../redux-saga/actions/userActions';
import { getAccountSelector } from '../../redux-saga/selectors/accountSelector';
import Logo from './Logo';
import Authorization from './Authorization';
import './style.css';

interface Lang {
  img: string
}

const Header = () => {
  const [langDisplay, setLangDisplay] = useState(false);
  const [authVariant, setAuthVariant] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const authInfo = useSelector(getAccountSelector);
  const langs: {[lang: string]: Lang} = {
    en: { img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png' },
    ru: { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png' }
  };

  const authVerif = async () => {
    try {
      const response = await fetch("http://localhost:5000/accounts/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token
        }   
      });
      const jsonData = await response.json();
      const info = {pending: false, error: false, info:jsonData}
      dispatch(userAuth(info));
    } catch (err: any) {
      console.error(err.message);
    }
  }

  const infoTaked = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
  }
  const authClose = () => {
    setAuthVariant('');
  }
  
  useEffect(() => {
    token && !authInfo.name && authVerif();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, authInfo])

  return (
    <div className='head'>
      {authVariant &&
        <Authorization
          infoTaked={infoTaked} 
          authClose={authClose}
          authVariant={authVariant}
        />
      }
      <Link to='/'>
        <Logo />
      </Link>
      <div className='head_list'>
        {
          (token &&
            pagesList.map((button) => (
              <Link className="head_button" key={button.name} to={button.link}>
                {button.name}
              </Link>
            ))
          )
          || (
            pagesList.map((button) => (
              (button.access === 'free' &&
                <Link className="head_button" key={button.name} to={button.link}>
                  {button.name}
                </Link>
              ) || (
                button.access === 'authorize' && 
                <span className="head_button" key={button.name} onClick={() => setAuthVariant('something')}>{button.name}</span>
              )
            ))
          )
        }
      </div>
      
      <div className="right_side">
        <OutsideClickHandler onOutsideClick={() => setLangDisplay(false)}>
          <div className="flags">
            <div onClick={() => setLangDisplay(true)}>
              <img alt={t("flag")} className="flags_img" src={t("flag")}/>
            </div>
            {langDisplay && Object.keys(langs).map(lang => (
              <div className="flag" key={lang} onClick={() => i18n.changeLanguage(lang)}>
                <img alt={lang} className="flags_img" src={langs[lang].img} />
              </div>
            ))}
          </div>
        </OutsideClickHandler>
        <div className="authentication">
          {(!token &&
            <>
              <div className="head_button" onClick={() => setAuthVariant('login')}>
                {t("head.buttons.login")}
              </div>|
              <div className="head_button" onClick={() => setAuthVariant('registration')}>
                {t("head.buttons.registration")}
              </div>
            </>
          ) || (
            <>
              <div>{authInfo.name}</div>
              |
              <div 
                className="head_button" 
                onClick={() => ((localStorage.removeItem('token'),
                                              setToken(''),
                                              dispatch(userDeauth())))}
              >
                deactive
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;