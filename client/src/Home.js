import React from 'react';
import './App.css';
import Header from './header'
import About from './about'
import Portfolio from './portfolio'

import { Switch, Route } from 'react-router-dom'
//import { render } from '@testing-library/react';

function Home() {

  return (
    <div className="App">
      
      <h1>There are two ways of spreading light:
        <p>to be the candle or the mirror that reflects it.</p>
      </h1><h3>Edith Wharton</h3>
     <Header/>
        
      <Switch>

        <Route path={'/about'} component={About} />
        <Route  path={'/portfolio'} component={Portfolio} />>

      </Switch>

    </div>
  );
}

export default Home


