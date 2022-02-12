import React from 'react';
import ReactDOM from 'react-dom';
import {EasybaseProvider} from 'easybase-react';
import ebconfig from './ebconfig';
import {BrowserRouter} from 'react-router-dom';
import {DiaryProvider} from './contexts/diary-context';
import App from './app';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <EasybaseProvider ebconfig={ebconfig}>
      <BrowserRouter>
        <DiaryProvider>
          <App/>
        </DiaryProvider>
      </BrowserRouter>
    </EasybaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
