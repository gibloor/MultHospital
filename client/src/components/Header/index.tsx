import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Login from './Login';
import Regist from './Registration';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';
import Auth from './Auth'

interface Info {
  id: number,
  name: string,
  image: string, 
  features: string[],
  acsessToken: string
}

interface Lang {
  img: string
}

const Header = () => {
  const [langDisplay, setLangDisplay] = useState(false);
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [registDisplay, setRegistDisplay] = useState(false);
  const [authDisplay, setAuthDisplay] = useState(false);
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
      setAccountInfo(jsonData)

    } catch (err: any) {
      console.error(err.message);
    }
  }

  const langs: {[lang: string]: Lang} = {
    en: { img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png' },
    ru: { img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png' }
  };

  const { t, i18n } = useTranslation();
  
  const loginVisibility = (visibility: boolean) => {
    setLoginDisplay(visibility)
  }
  const registVisibility = (visibility: boolean) => {
    setRegistDisplay(visibility)
  }
  const authVisibility = (visibility: boolean) => {
    setAuthDisplay(visibility)
  }
  const infoTaked = (info: Info) => {
    setAccountInfo(info);
    localStorage.setItem('token', info.acsessToken);
    setToken(info.acsessToken);
  }
  
  useEffect(() => {
    token && !accountInfo && authVerif()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountInfo, token])

  const buttonsList = [
    {
      name: 'Aducation',
      link: '/aducation',
      access: 'authorize'
    },
    {
      name: 'Progres',
      link: '/progres',
      access: 'authorize'
    },
    {
      name: 'About project',
      link: '/aboutProject',
      access: 'free'
    },
    {
      name: 'Settings',
      link: '/settings',
      access: 'free'
    }
   ];

  return (
    <div className='head'>
      {loginDisplay && 
        <Login loginVisibility={loginVisibility} infoTaked={infoTaked}/>
      }
      {registDisplay &&
        <Regist registVisibility={registVisibility} infoTaked={infoTaked}/>
      }
      {authDisplay && 
        <Auth authVisibility={authVisibility} registVisibility={registVisibility} loginVisibility={loginVisibility}/>
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
          buttonsList.map((button) => (
            <Link className="head_button" key={button.name} to={button.link}>
              {button.name}
            </Link>
          )))
          || (
            buttonsList.map((button) => (
              (button.access === 'free' &&
                <Link className="head_button" key={button.name} to={button.link}>
                  {button.name}
                </Link>
              ) || (
              button.access === 'authorize' && 
              <span className="head_button" key={button.name} onClick={() => setAuthDisplay(true)}>{button.name}</span>
            )
          )))
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
              <div className="head_button" onClick={() => setLoginDisplay(true)}>{t("head.authorization.button")}</div>|
              <div className="head_button" onClick={() => setRegistDisplay(true)}>{t("head.registration.button")}</div>
            </>
          ) || (
            accountInfo && token &&
            <>
              <div>{accountInfo.name}</div>
              <div className="head_button" onClick={() => ((localStorage.removeItem('token'), setToken('')))}>
                |deactive
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;