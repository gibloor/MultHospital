import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './head.css';

import Login from './login';
import Regist from './registration';

interface Info {
  id: number,
  name: string,
  image: string, 
  features: string[],
  acsessToken: string
}

const Head = () => {

  const [loginDisplay, setLoginDisplay] = useState(false);
  const [registDisplay, setRegistDisplay] = useState(false);
  const [accountInfo, setAccountInfo] = useState<Info>();
  const [token, setToken] = useState(localStorage.getItem('token'));

  const [accountInfo, setAccountInfo] = useState<Info>();
  const [token, setToken] = useState();

    } catch (err) {
      console.error(err.message);
    }
  }
  
  const loginVisibility = (visibility: boolean) => {
    setLoginDisplay(visibility)
  }
  const registVisibility = (visibility: boolean) => {
    setRegistDisplay(visibility)
  }
  const infoTaked = (info: Info) => {

  const infoTaked = (info: Info) => {
    setAccountInfo(info);
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
        <div>language|</div>
        {!accountInfo &&
          <div className="authentication">
            <div onClick={() => setLoginDisplay(true)}>authorization|</div>
            <div onClick={() => setRegistDisplay(true)}>registration</div>
          </div>
        }
        {accountInfo &&
          <div>{accountInfo.name}</div>
        }
      </div>
    </div>
  )
}

export default Head;