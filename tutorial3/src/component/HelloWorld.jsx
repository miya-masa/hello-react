import React from 'react';
import ListItem from './ListItem.jsx';

export default class HelloWorld extends React.Component {

  // コンストラクターを利用してコンポーネントの初期化を行う
  constructor() {
    // super()の呼び出し
    // TODO
    // handleCountUpとhandleCountDownのthisを強制する(Function#bind(this))
    // TODO
    // コンポーネントの状態
    this.state = {
      count: 0,
      data: ['data1', 'data2', 'data3']
    };
  }

  // 状態を更新するイベントハンドラメソッド
  // カウントを一増やす
  handleCountUp() {
    // TODO
  }

  // 状態を更新するイベントハンドラメソッド
  // カウントを一減らす
  handleCountDown() {
    // TODO
  }

  render() {
    return (
      <div>
        { // HelloWorldの直後に プロパティnameの表示
        }
        <h1>/* TODO */</h1>
        { // clickイベントにハンドラを設定
        }
        <button /* TODO */>Count UP</button>
        <button /* TODO */>Count Down</button>
        { // カウントを表示
        }
        <p>/* TODO */</p>
        <ul>
        {
        // state.data内の情報をListItemとして表示する
        // this.state.data.map を使ってみる。
        // ListItemにはプロパティ名"key"を設定する。
        // ListItemの内容はdataの内容をそのまま設定する。
        }
        {
        /* TODO */
        }
        </ul>
      </div>
      );
  }
}

// HelloWorldのPropTypesを定義
// name -> 文字列 必須
// TODO
