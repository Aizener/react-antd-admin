import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

