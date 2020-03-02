import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = window.document.querySelector('#root');
ReactDOM.render(<App />, app);
serviceWorker.unregister();
