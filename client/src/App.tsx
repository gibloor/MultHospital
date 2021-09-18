import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Main from './components/pages/Main';
import Basement from './components/pages/Basement';
import Progres from './components/pages/Progres';
import AboutProject from './components/pages/AboutProject';
import Setting from './components/pages/Setting';
import GreetNew from './components/GreetNew';

//DevTime
import InputQuestion from './components/db/questions/InputQuestion';
import ListQuestion from './components/db/questions/ListQuestion';
import InputMultfilm from './components/db/multfilms/InputMultfilm';
import ListMultfilms from './components/db/multfilms/ListMultfilm';

function App() {

  const [visiter, setVisiter] = useState(localStorage.getItem('visiter'))

  const changeVisiter = () => {
    setVisiter('true');
    localStorage.setItem('visiter', 'true')
  }

  return (
    <>
      {(
        visiter && 
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={() => <Main/>} />
              <Route path="/progres" component={() => <Progres/>} />
              <Route path="/aboutProject" component={() => <AboutProject/>} />
              <Route path="/settings" component={() => <Setting/>} />
            </Switch>
            <Basement/>
          </div>
        ) ||
        <GreetNew changeVisiter={changeVisiter} />
      }
      {/* dev time*/}
      <InputQuestion />
      <ListQuestion />
      <InputMultfilm />
      <ListMultfilms />
      <span>
        visiter: {localStorage.getItem('visiter')},
        involvement: {localStorage.getItem('involvement')}
      </span>
      <button onClick ={() => ((localStorage.removeItem('visiter'),
                                localStorage.removeItem('involvement')))}>
        Чистим инфу о первом посещении
      </button>
    </>
  );
}

export default App;
