import React from 'react';
// 各dumbコンポーネントをインポート
// TODO

// Applicationはsmartコンポーネント
export default class Application extends React.Component {

  // コンストラクタで初期化
  constructor(props) {
    super(props);
    // メソッドのthisを強制
    // TODO

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
    // TODO
  }

  // テキストボックスの変更イベント
  handleSubmit(event) {
    // stateからuserIdをpasswordを取得する
    // TODO

    // userIdが'user'かつpasswordが'password'の場合ログイン成功
      // 状態を変更し、'ログイン成功しました！'というメッセージボックスを開く
      // userIdのテキストフィールドとpasswordのテキストフィールドはクリアする
    // userIdが'user'かつpasswordが'password'のではない場合ログイン失敗
      // 状態を変更し、'ログイン失敗しました。。。。'というメッセージボックスを開く
      // userIdのテキストフィールドとpasswordのテキストフィールドはクリアする
    // TODO
    }
  }

  // メッセージボックスを閉じる
  handleClose() {
    // メッセージボックスを閉じる状態に変更する
    // TODO
  }

  render() {
    return (
      // Contentsを定義
      <Contents>
        { // ユーザ名のテキストボックスの作成。stateとこのメソッドとTextBoxのプロパティを見返して考えてみる
      }
      // TODO
        { // パスワードのテキストボックス作成。stateとこのメソッドとTextBoxのプロパティを見返して考えてみる
      }
      // TODO
        { // サブミットボタンの作成。stateとこのメソッドとSubmitButtonのプロパティを見返して考えてみる
      }
      // TODO
        { // メッセージボックスを定義。stateとこのメソッドとSubmitButtonのプロパティを見返して考えてみる
      }
      // TODO
      </Contents>
      );
  }
}
