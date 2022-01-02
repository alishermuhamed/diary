import React from 'react';
import ReactDOM from 'react-dom';
import {EasybaseProvider} from 'easybase-react';
import ebconfig from './ebconfig';
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <EasybaseProvider ebconfig={ebconfig}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </EasybaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
