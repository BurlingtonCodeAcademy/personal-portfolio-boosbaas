import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About'
import Curious from './Curious'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";



function App() {
  return (
    <HashRouter>
      <div>
      <Header />
      <ul className='header'>
        <li><NavLink exact to={'/'} component={Home} /></li>
        <li><NavLink exact to={'/about'} component={About} /></li>
        <li><NavLink exact to={'/curious'} component={Curious} /></li>
      </ul>
      <div className='content'>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/curious' component={Curious} />
      </div>
      </div>
    </HashRouter>

  );
}



export default App;