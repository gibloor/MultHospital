import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './head.css';
import Login from './login';
import Regist from './registration';
import { useTranslation } from 'react-i18next';
import OutsideClickHandler from 'react-outside-click-handler';

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

const Head = () => {
  const [langDisplay, setLangDisplay] = useState(false);
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [registDisplay, setRegistDisplay] = useState(false);
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

    } catch (err) {
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
  const infoTaked = (info: Info) => {
    setAccountInfo(info);
    localStorage.setItem('token', info.acsessToken);
    setToken(info.acsessToken);
  }
  
  useEffect(() => {
    token && !accountInfo && authVerif()
  }, [token, accountInfo])

  const buttonsList = [
    {
      name: 'Aducation',
      link: '/aducation'
    },
    {
      name: 'Progres',
      link: '/progres'
    },
    {
      name: 'About project',
      link: '/aboutProject'
    },
    {
      name: 'Settings',
      link: '/settings'
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
      <Link to='/'>
        <div className='logo'>
          <img 
            alt='logo img not exist' 
            src='https://www.promarinetrade.com/cache/promarine/public/shop_product_picture/_1200x800x0/4618_G.jpg'
          />
        </div>
      </Link>
      <div className='head_list'>
        {buttonsList.map((button) => (
          <Link key={button.link} to={button.link}>
            {button.name}
          </Link>
        ))}
      </div>
      <div className="right_side">
        <OutsideClickHandler onOutsideClick={() => setLangDisplay(false)}>
          <div className="flags">
            <div onClick={() => setLangDisplay(true)}>
              <img className="flags_img" src={t("flag")}/>
            </div>
            {langDisplay && Object.keys(langs).map(lang => (
              <div className="flag" key={lang} onClick={() => i18n.changeLanguage(lang)}>
                <img className="flags_img" src={langs[lang].img} />
              </div>
            ))}
          </div>
        </OutsideClickHandler>

        {!token &&
          <div className="authentication">
            <div onClick={() => setLoginDisplay(true)}>{t("head.authorization.button")}</div>
            <div onClick={() => setRegistDisplay(true)}>{t("head.registration.button")}</div>
          </div>
        }
        {token && accountInfo &&
          <>
            <div>{accountInfo.name}</div>
            <div onClick={() => (localStorage.removeItem('token'), setToken(''))}>
              |deactive
            </div>
          </>
        }
      </div>

    </div>
  )
}

export default Head;