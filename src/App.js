import React from 'react';
import './App.css';

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
  }

  handleXClick = () => {
    this.setState({
      x: this.state.x + 1
    });
  }
  render() {
    return (
      <div className="component-A">
        <h1>Component A</h1>
        The state in the component A is {this.state.x} <br />
        this.handleXClick will set the state to a new value => {"this.setState({x: this.state.x + 1})"} <br />
        <B x={this.state.x} onXClick={this.handleXClick} />
        <D x={this.state.x} onXClick={this.handleXClick} />
      </div>
    );
  }
}
class B extends React.Component {
  render() {
    return (
      <div className="component-B">
        <h1>Component B</h1>
        this.props.x = {this.props.x} <br />
        this.props.onXClick => (method from component A) <br />
        <C x={this.props.x} onXClick={this.props.onXClick} />
      </div>
    );
  }
}
class C extends React.Component {
  render() {
    return (
      <div className="component-C">
        <h1>Component C</h1>
        this.props.x = {this.props.x} <br />
        this.props.onXClick => (method passed from component B) <br />
        <button onClick={this.props.onXClick}>{this.props.x}</button> onClick =>
        this.props.onXClick
      </div>
    );
  }
}
class D extends React.Component {
  render() {
    return (
      <div className="component-D">
        <h1>Component D</h1>
        this.props.x = {this.props.x} <br />
        this.props.onXClick => (method from component A) <br />
        <button onClick={this.props.onXClick}>{this.props.x}</button> onClick =>
        this.props.onXClick
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <A />
    </div>
  );
}

export default App;






