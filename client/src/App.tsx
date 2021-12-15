import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Basement from 'components/Basement';
import Main from 'components/pages/Main';
import Progres from 'components/pages/Progres';
import AboutProject from 'components/pages/AboutProject';
import Setting from 'components/pages/Setting';
import Multfilm from 'components/pages/Progres/Multfilms/MultfilmPage';

import './App.scss';

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/progres" component={() => <Progres />} />
        <Route path="/aboutProject" component={() => <AboutProject />} />
        <Route path="/setting" component={() => <Setting />} />
        <Route path="/progres/multfilm/:section/:name" component={() => <Multfilm />} />
      </Switch>
      <Basement />
    </>
  );
}

export default App;
