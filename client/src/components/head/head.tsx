import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './head.css';

import Login from './login';
import Regist from './registration';

interface Info {
  id: number,
  login: string,
  name: string,
  password: string, 
  image: string, 
  features: string[]
}

const Head = () => {

  const [loginDisplay, setLoginDisplay] = useState(false);
  const [registDisplay, setRegistDisplay] = useState(false);

  const [accountInfo, setAccountInfo] = useState({});
  const [token, setToken] = useState();

  const loginVisibility = (visibility: boolean) => {
    setLoginDisplay(visibility)
  }

  const registVisibility = (visibility: boolean) => {
    setRegistDisplay(visibility)
  }

  const infoTaked = (info: Info) => {
    setAccountInfo(info)
  }
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
      {loginDisplay && <Login loginVisibility={loginVisibility} infoTaked={infoTaked}/>}
      {registDisplay && <Regist registVisibility={registVisibility}/>}
      <Link to='/'>
        <div className='logo'>
          <img alt='logo img not exist' src='https://www.promarinetrade.com/cache/promarine/public/shop_product_picture/_1200x800x0/4618_G.jpg'/>
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
        {!token &&
          <div className="authentication">
            <div onClick={() => setLoginDisplay(true)}>authorization|</div>
            <div onClick={() => setRegistDisplay(true)}>registration</div>
          </div>
        }
        {token && 
          <div></div>
        }
      </div>
    </div>
  )
}

export default Head;