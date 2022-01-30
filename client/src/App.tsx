import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Basement from 'components/Basement';
import Main from 'components/pages/Main';
import Multfilms from 'components/pages/Multfilms';
import AboutProject from 'components/pages/AboutProject';
import Setting from 'components/pages/Setting';
import Multfilm from 'components/pages/Multfilms/MultChain/MultfilmPage';
import Profile from 'components/pages/Profile';

import './App.scss';
import AutoSignUp from 'components/AutoSignUp';

function App() {

  return (
    <AutoSignUp>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route path="/aboutProject" component={() => <AboutProject />} />
        <Route path="/setting" component={() => <Setting />} />
        <Route exact path="/multfilms" component={() => <Multfilms />} />
        <Route path="/multfilms/:section/:name" component={() => <Multfilm />} />
        <Route path="/profile/:id" component={() => <Profile />} />
      </Switch>
      <Basement />
    </AutoSignUp>
  );
}

export default App;
