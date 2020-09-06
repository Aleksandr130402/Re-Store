import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import BookstoreService from './services';
import ErrorBoundary from './components/error-boundary';
import { BookstoreServiceProvider } from './components/bookstoreservice-context';

import store from './store';

const bookstoreService = new BookstoreService();

 

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>
 ,
  document.getElementById('root')
);
