import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Basement from 'components/Basement';
import Main from 'components/pages/Main';
import Multfilms from 'components/pages/Multfilms';
import AboutProject from 'components/pages/AboutProject';
import Multfilm from 'components/pages/Multfilms/MultChain/MultfilmPage';
import Profile from 'components/pages/Profile';
import AutoSignUp from 'components/AutoSignUp';
import TakeMultfilms from 'components/TakeMultfilms';
import PagesHelmet from 'components/PagesHelmet';

import './App.scss';

function App() {

  return (
    <AutoSignUp>
      <TakeMultfilms>
        <PagesHelmet/>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route path="/aboutProject" component={() => <AboutProject />} />
          <Route path="/profile/:id" component={() => <Profile />} />
          <Route exact path="/multfilms" component={() => <Multfilms />} />
          <Route path="/multfilms/:section/:name" component={() => <Multfilm />} />
        </Switch>
        <Basement />
      </TakeMultfilms>
    </AutoSignUp>
  );
}

export default App;
