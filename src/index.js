import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link } from 'react-router-dom';
import LazyRoute from './LazyRoute';

ReactDOM.render(
  <Router>
    <Fragment>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <LazyRoute path="/home" load={() => import('./Home')} />
      <LazyRoute path="/about" load={() => import('./About')} />
      <input type="text"/>23311
    </Fragment>
  </Router>,
  document.getElementById('App'),
);
