import React from 'react';

export default class SubmitButton extends React.Component {

  render() {
    return (<input type='submit' className='btn btn-default' value={this.props.value} onClick={this.props.handleSubmit} />);
  }
}

SubmitButton.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};
