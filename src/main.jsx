import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxRenderer } from './reduxManager';
import App from './App.jsx';
import './index.css';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxRenderer store={store}>
      <App />
    </ReduxRenderer>
  </React.StrictMode>,
);