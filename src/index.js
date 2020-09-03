import React from 'react';
import ReactDOM from 'react-dom';
import {CreateStore} from 'redux';

let store = CreateStore(reduser);


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
