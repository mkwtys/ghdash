// @flow
import React from 'react';

export default function HelloWorldComponent(props) {
  return (
    <div>
      <div>Hello World!</div>
      <div>We are using Node.js {props.node},</div>
      <div>Chromium {props.chrome},</div>
      <div>and Electron {props.electron}.</div>
    </div>
  );
}
