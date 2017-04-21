// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldComponent from './ui/HelloWorldComponent';

ReactDOM.render(
  <HelloWorldComponent {...process.versions} />,
  document.querySelector('.root')
);
