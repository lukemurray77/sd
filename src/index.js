import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Home from './components/home';

import './css/index.css';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path = '/' component={Home}/>
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
