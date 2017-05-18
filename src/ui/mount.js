// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldComponent from './HelloWorldComponent';

export default el => {
  return new Promise((resolve, reject) => {
    ReactDOM.render(<HelloWorldComponent {...process.versions} />, el, resolve);
  });
};
