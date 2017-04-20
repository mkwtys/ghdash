const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorldComponent extends React.Component {
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <div>We are using Node.js ${this.props.node},</div>
        <div>Chromium ${this.props.chrome},</div>
        <div>and Electron ${this.props.electron}.</div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorldComponent {...process.versions} />,
  document.querySelector('.root')
);
