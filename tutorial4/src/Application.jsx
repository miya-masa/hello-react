import React from 'react';
// 各dumbコンポーネントをインポート
import Contents from './component/Contents.jsx';
import TextBox from './component/TextBox.jsx';
import SubmitButton from './component/SubmitButton.jsx';
import MessageBox from './component/MessageBox.jsx';

// Applicationはsmartコンポーネント
export default class Application extends React.Component {

  // コンストラクタで初期化
  constructor(props) {
    super(props);
    // メソッドのthisを強制
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      userId: '',
      password: '',
      open: false,
      message: ''
    };
  }

  // テキストボックスの変更イベント
  // 状態を変更する
  // event.target.id => stateのキー値
  // event.target.value => stateのvalue
  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  // テキストボックスの変更イベント
  handleSubmit(event) {
    // stateからuserIdをpasswordを取得する
    const {userId, password} = this.state;

    // userIdが'user'かつpasswordが'password'の場合ログイン成功
    if (userId === 'user' && password === 'password') {
      // 状態を変更し、'ログイン成功しました！'というメッセージボックスを開く
      // userIdのテキストフィールドとpasswordのテキストフィールドはクリアする
      this.setState({
        userId: '',
        password: '',
        open: true,
        message: 'ログイン成功しました！'
      });
    } else {
      // 状態を変更し、'ログイン失敗しました。。。。'というメッセージボックスを開く
      // userIdのテキストフィールドとpasswordのテキストフィールドはクリアする
      this.setState({
        userId: '',
        password: '',
        open: true,
        message: 'ログイン失敗しました。。。。'
      });
    }
  }

  // メッセージボックスを閉じる
  handleClose() {
    // メッセージボックスを閉じる状態に変更する
    this.setState({
      open: false
    });
  }

  render() {
    return (
      // Contentsを定義
      <Contents>
        { // ユーザ名のテキストボックスの作成。stateとこのメソッドとTextBoxのプロパティを見返して考えてみる
      }
        <TextBox id="userId" label="ユーザID" placeholder="ユーザIDを入力してください : user" onChange={this.onChange} value={this.state.userId} />
        { // パスワードのテキストボックス作成。stateとこのメソッドとTextBoxのプロパティを見返して考えてみる
      }
        <TextBox id="password" label="パスワード" placeholder="パスワードを入力してください : password" type="password" onChange={this.onChange} value={this.state.password} />
        { // サブミットボタンの作成。stateとこのメソッドとSubmitButtonのプロパティを見返して考えてみる
      }
        <SubmitButton value="Login" handleSubmit={this.handleSubmit} />
        { // メッセージボックスを定義。stateとこのメソッドとSubmitButtonのプロパティを見返して考えてみる
      }
        <MessageBox id="loginResult" message={this.state.message} open={this.state.open} handleClose={this.handleClose}/>
      </Contents>
      );
  }
}
