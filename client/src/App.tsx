import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Head from './components/head';
import Main from './components/main';
import Basement from './components/basement';
import Aducation from './components/aducation';
import Progres from './components/progres';
import AboutProject from './components/aboutProject';
import Setting from './components/setting';
import GreetNew from './components/greetNew';

//DevTime
import InputQuestion from './components/devTools/inputQuestion';
import ListQuestion from './components/devTools/listQuestion';


function App() {
  
  const [visiter, setVisiter] = useState(localStorage.getItem('visiter'))

  const changeVisiter = () => {
    setVisiter('true');
    localStorage.setItem('visiter', 'true')
  }

  return (
    <BrowserRouter>
        {(
          visiter && 
            <div>
              <Head/>
              <Switch>
                <Route exact path="/" component={() => <Main/>} />
                <Route path="/aducation" component={() => <Aducation/>} />
                <Route path="/progres" component={() => <Progres/>} />
                <Route path="/aboutProject" component={() => <AboutProject/>} />
                <Route path="/settings" component={() => <Setting/>} />
              </Switch>
              <Basement/>
            </div>
          ) ||
          <GreetNew changeVisiter={changeVisiter} />
        }
        {/* dev */}
        <InputQuestion />
        <ListQuestion />
        <button onClick ={() => localStorage.removeItem('visiter')}>Чистим инфу о первом посещении</button>
    </BrowserRouter>
  );
}

export default App;
