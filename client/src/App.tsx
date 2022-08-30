import React from 'react';

import Routes from 'Routes';
import AutoSignUp from 'components/AutoSignUp';
import TakeMultfilms from 'components/TakeMultfilms';

import './App.scss';

function App() {

  return (
    <AutoSignUp>
      <TakeMultfilms>
        <Routes />
      </TakeMultfilms>
    </AutoSignUp>
  );
}

export default App;
