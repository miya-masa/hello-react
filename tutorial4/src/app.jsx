import React from 'react';
import Contents from './component/Contents.jsx';
import TextBox from './component/TextBox.jsx';
import SubmitButton from './component/SubmitButton.jsx';
import MessageBox from './component/MessageBox.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      open: false,
      message: ''
    };
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    const {userId, password} = this.state;

    if (userId === 'user' && password === 'password') {
      this.setState({
        userId: '',
        password: '',
        open: true,
        message: 'ログイン成功しました！'
      });
    } else {
      this.setState({
        userId: '',
        password: '',
        open: true,
        message: 'ログイン失敗しました。。。。'
      });
    }
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <Contents>
        <TextBox id='userId' label='ユーザID' placeholder='ユーザIDを入力してください : user' onChange={this.onChange.bind(this)} value={this.state.userId} />
        <TextBox id='password' label='パスワード' placeholder='パスワードを入力してください : password' type='password' onChange={this.onChange.bind(this)} value={this.state.password} />
        <SubmitButton value='Login' handleSubmit={this.handleSubmit.bind(this)} />
        <MessageBox id='loginResult' message={this.state.message} open={this.state.open} handleClose={this.handleClose.bind(this)}/>
      </Contents>
      );
  }
}
