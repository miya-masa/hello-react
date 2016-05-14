import React from 'react';
import ListItem from './ListItem.jsx';

export default class HelloWorld extends React.Component {

  constructor() {
    super();
    this._handleCountUp = this._handleCountUp.bind(this);
    this._handleCountDown = this._handleCountDown.bind(this);
    this.state = {
      count: 0,
      data: ['data1', 'data2', 'data3']
    };
  }

  _handleCountUp() {
    this.setState({
      count: this.state.count + 1
    });
  }
  _handleCountDown() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World!! {this.props.name} </h1>
        <button onClick={this._handleCountUp}>Count UP</button>
        <button onClick={this._handleCountDown}>Count Down</button>
        <p>{this.state.count}</p>
        <ul>
      { this.state.data.map((e) => <ListItem key={e}>{e}</ListItem>) }
        </ul>
      </div>
      );
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired
};
