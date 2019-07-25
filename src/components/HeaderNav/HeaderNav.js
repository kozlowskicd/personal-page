import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';

import HeaderNavStyles from './HeaderNav.scss';

export default function HeaderNav(props) {
  return(
    <Router>
      <div style={HeaderNavStyles} className='header-nav'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutme/">About Me</Link>
            </li>
            <li>
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