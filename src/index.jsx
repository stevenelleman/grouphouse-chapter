import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// TODO: Convert jsx -> tsx
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root'),
);
