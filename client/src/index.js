import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import './bootstrap.min.css';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

console.log('index.js accessed');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.unregister();
