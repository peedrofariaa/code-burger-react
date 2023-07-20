import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './globalStyles';
import MyRoutes from './routes';

ReactDOM.render(
  <>
    <MyRoutes />
    <GlobalStyles />
  </>, document.getElementById('root')
);    