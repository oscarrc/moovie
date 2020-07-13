import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import { search } from './reducers/search';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Generamos la store
const store = createStore(search, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>    
    <BrowserRouter> {/* Used to  enable router  */}
      <Provider store={store}>  {/* Makes store available to components */}        
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
