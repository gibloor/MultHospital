import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from 'components/pages/Main';
import Multfilms from 'components/pages/Multfilms';
import AboutProject from 'components/pages/AboutProject';
import Multfilm from 'components/pages/Multfilms/MultChain/MultfilmPage';
import Profile from 'components/pages/Profile';
import Header from 'components/Header';
import Basement from 'components/Basement';

const Routes = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route path="/about-project" component={() => <AboutProject />} />
        <Route path="/profile/:id" component={() => <Profile />} />
        <Route exact path="/multfilms" component={() => <Multfilms />} />
        <Route path="/multfilms/:section/:name" component={() => <Multfilm />} />
      </Switch>
      <Basement />
    </>
  )
}

export default Routes;