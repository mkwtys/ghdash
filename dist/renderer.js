'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorldComponent extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        'Hello World!'
      ),
      React.createElement(
        'div',
        null,
        'We are using Node.js $',
        this.props.node,
        ','
      ),
      React.createElement(
        'div',
        null,
        'Chromium $',
        this.props.chrome,
        ','
      ),
      React.createElement(
        'div',
        null,
        'and Electron $',
        this.props.electron,
        '.'
      )
    );
  }
}

ReactDOM.render(React.createElement(HelloWorldComponent, process.versions), document.querySelector('.root'));