// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldComponent from './component/HelloWorldComponent';

ReactDOM.render(
  <HelloWorldComponent {...process.versions} />,
  document.querySelector('.root')
);
