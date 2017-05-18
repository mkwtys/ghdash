// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import mount from './ui/mount';

const el = document.querySelector('.root');
if (!el) {
  throw new Error('no .root');
}
mount(el);
