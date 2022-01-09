import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import FormUnauthorized from './FormUnauthorized';
import FormAuthorization from './FormAuthorization';

import './styles.scss';

interface Props {
  authVariant: string,
  authClose: () => void,
}

const Authorization = (props: Props) => {
  const [typeForm, setTypeForm] = useState(props.authVariant);

  const changeTypeForm = (type:string) => {
    setTypeForm(type);
  };

  return (
    <div className="auth">
      <OutsideClickHandler onOutsideClick={() => props.authClose()}>
        {
          typeForm === 'something' && 
          <FormUnauthorized
            changeTypeForm={changeTypeForm}
            authClose={props.authClose}
          />
          || 
          <FormAuthorization
            authClose={props.authClose}
            typeForm={typeForm}
          />
        }
      </OutsideClickHandler>
    </div>
  );
};

export default Authorization;