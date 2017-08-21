import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render, Router } from 'mirrorx'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
