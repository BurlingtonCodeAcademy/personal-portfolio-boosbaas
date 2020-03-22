import React from 'react';
import './App.css';
import SVG from './SVG/svg.js';
import Home from './Home';
import Header from './Header';
import About from './About';
import Curious from './Curious';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>

        <Header />
        <div>
          <img src='./Images/personalPortfolioFlowChart.png' alt='' />;
     </div>
        <Route exact path={'/'} component={Home} />
        <Route path={'/About'} component={About} />
        <Route path={'/Curious'} component={Curious} />

      </Switch>
    </Router>

  );
}



export default App;