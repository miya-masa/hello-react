import React from 'react';

export default class TextBox extends React.Component {

  render() {
    return (
      <div className='form-group'>
      <label htmlFor={this.props.id}>{this.props.label}</label>
      <input id={this.props.id} type={this.props.type} className='form-control' placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value} />
    </div>
      );
  }
}

TextBox.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  type: React.PropTypes.oneOf(['password', 'text'])
};
TextBox.defaultProps = {
  placeholder: '',
  type: 'text',
  value: ''
};
