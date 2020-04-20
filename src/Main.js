import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import Home from './Home'
import Stuff from './Stuff'
import Contact from './Contact'

import './App.css';

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div >
          <h1>Beginnings</h1>
          <ul className='header'>
            <li><NavLink  to='/Home'>Home</NavLink></li>
            <li><NavLink to='/stuff'>Stuff</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
          <div className='content'>
          <Route  path='/Home' component={Home} />
          <Route  path='/stuff' component={Stuff} />
          <Route  path='/contact' component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
