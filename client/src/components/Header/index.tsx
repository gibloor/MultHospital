import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';
import './style.css';
import Authorization from './Authorization';
import { pagesList } from './pagesList';

import { useDispatch } from 'react-redux';
import { userAuth } from '../../redux-saga/actions/userActions';

interface Info {
  id: number,
  name: string,
  image: string, 
  features: string[],
  acsessToken: string,
  test_passed: boolean,
  involvement: string
}

interface Lang {
  img: string
}

const Header = () => {
  const dispatch = useDispatch();

  const [langDisplay, setLangDisplay] = useState(false);
  const [authVariant, setAuthVariant] = useState('');
  const [accountInfo, setAccountInfo] = useState<Info>();
  const [token, setToken] = useState(localStorage.getItem('token'));

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
      setAccountInfo(jsonData);
      const info = {pending: false, error: false, info:jsonData}
      dispatch(userAuth(info));
    } catch (err: any) {
      console.error(err.message);
    }
  }

  const langs: {[lang: string]: Lang} = {
    en: { img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png' },
    ru: { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png' }
  };

  const { t, i18n } = useTranslation();
  
  const infoTaked = (info: Info) => {
    setAccountInfo(info);
    localStorage.setItem('token', info.acsessToken);
    setToken(info.acsessToken);
  }
  const authClose = () => {
    setAuthVariant('');
  }
  
  useEffect(() => {
    token && !accountInfo && authVerif()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountInfo, token])

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
        <div className='logo'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46">
            <g fill="#FFFFFF">
              <path d="M129.19,139.91c-0.95-17.86-2.09-39.33-1.9-55.29h-0.57c-4.37,15.01-9.69,30.97-16.15,48.64l-22.61,62.13H75.42
                L54.71,134.4c-6.08-18.05-11.21-34.58-14.82-49.78h-0.38c-0.38,15.96-1.33,37.43-2.47,56.62l-3.42,54.91H17.85l8.93-128.06h21.09
                l21.85,61.94c5.32,15.77,9.69,29.83,12.92,43.13h0.57c3.23-12.92,7.79-26.98,13.49-43.13l22.8-61.94h21.09l7.98,128.06h-16.15
                L129.19,139.91z"/>
              <path d="M148.01,68.09v53.58h61.94V68.09h16.72v128.06h-16.72v-60.04h-61.94v60.04h-16.53V68.09H148.01z"/>
            </g>
          </svg>
        </div>
      </Link>

      <div className='head_list'>
        {
          (accountInfo &&
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
              <div className="head_button" onClick={() => setAuthVariant('login')}>{t("head.buttons.login")}</div>|
              <div className="head_button" onClick={() => setAuthVariant('registration')}>{t("head.buttons.registration")}</div>
            </>
          ) || (
            accountInfo && token &&
            <>
              <div>{accountInfo.name}</div>
              |
              <div 
                className="head_button" 
                onClick={() => ((localStorage.removeItem('token'), setToken('')))}
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