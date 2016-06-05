import React from 'react';
import ListItem from './ListItem.jsx';

export default class HelloWorld extends React.Component {

  // コンストラクターを利用してコンポーネントの初期化を行う
  constructor() {
    // super()の呼び出し
    super();
    // handleCountUpとhandleCountDownのthisを強制する(Function#bind(this))
    this.handleCountUp = this.handleCountUp.bind(this);
    this.handleCountDown = this.handleCountDown.bind(this);
    // コンポーネントの状態
    this.state = {
      count: 0,
      data: ['data1', 'data2', 'data3']
    };
  }

  // 状態を更新するイベントハンドラメソッド
  // カウントを一増やす
  handleCountUp() {
    this.setState({
      count: this.state.count + 1
    });
  }

  // 状態を更新するイベントハンドラメソッド
  // カウントを一減らす
  handleCountDown() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        { // HelloWorldの直後に プロパティnameの表示
        }
        <h1>Hello World!! {this.props.name} </h1>
        { // clickイベントにハンドラを設定
        }
        <button onClick={this.handleCountUp}>Count UP</button>
        <button onClick={this.handleCountDown}>Count Down</button>
        { // カウントを表示
        }
        <p>{this.state.count}</p>
        <ul>
        {
        // state.data内の情報をListItemとして表示する
        // this.state.data.map を使ってみる。
        // ListItemにはプロパティ名"key"を設定する。
        // ListItemの内容はdataの内容をそのまま設定する。
        }
      { this.state.data.map((e) => <ListItem key={e}>{e}</ListItem>) }
        </ul>
      </div>
      );
  }
}

// HelloWorldのPropTypesを定義
// name -> 文字列 必須
HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired
};
