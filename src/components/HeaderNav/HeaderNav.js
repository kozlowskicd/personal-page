import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';

import './HeaderNav.scss';



const HeaderNav = props => {

  const [menu, toggleMenu] = useState('closed');
  
  const handleMenuClick = () => {
    switch(menu) {
      case 'closed':
        toggleMenu('open');
        return;
      case 'open':
        toggleMenu('closed');
        return;
      default:
        toggleMenu('open');
        return;
      }
  }

  return(
    <Router>
      <div className={`header-nav-${menu}`} onClick={() => handleMenuClick()}>
        <nav>
          <ul className={`menu-${menu}`}>
            <li className={`list-item-${menu}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`list-item-${menu}`}>
              <Link to="/aboutme/">About Me</Link>
            </li>
            <li className={`list-item-${menu}`}>
              <Link to="/projects/">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/aboutme/" component={AboutMe} />
      <Route path="/projects/" component={Projects} />
    </Router>
  );
}

export default HeaderNav;
