import React from 'react';

export default class MessageBox extends React.Component {

  componentDidUpdate() {
    if (this.props.open) {
      window.$(`#${this.props.id}`).modal('show');
    } else {
      window.$(`#${this.props.id}`).modal('hide');
    }
  }

  render() {
    return (
      <div id={this.props.id} className='modal fade' tabIndex='-1' role='dialog'>
        <div className='modal-dialog modal-sm'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={this.props.handleClose}><span aria-hidden='true'>×</span></button>
              <h4 className='modal-title'>結果</h4>
            </div>
            <div className='modal-body'>
              <p>{this.props.message}</p>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-default' data-dismiss='modal' onClick={this.props.handleClose}>Close</button>
            </div>
          </div>
        </div>
    </div>
      );
  }
}

MessageBox.PropTypes = {
  id: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  handleClose: React.PropTypes.func.isRequired
};
