import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

interface Prop {
  registVisibility: (boolean: boolean) => void,
  loginVisibility: (boolean: boolean) => void,
  authVisibility: (boolean: boolean) => void,
};

const Auth = (prop: Prop) => {
  return (
    <div className="login">
      <OutsideClickHandler onOutsideClick={() => prop.authVisibility(false)}>
      <div className="login_form">
        <span className="login_label" onClick={() => ((prop.authVisibility(false), prop.registVisibility(true)))}>Registration</span>
        <span className="login_label" onClick={() => ((prop.authVisibility(false), prop.loginVisibility(true)))}>Login</span>
      </div>
      </OutsideClickHandler>
    </div>
  )
}

export default Auth