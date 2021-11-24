import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/main.scss';
import App from './App.js';
import ReactGA from 'react-ga';

ReactGA.initialize('G-R5LM1906J7');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

