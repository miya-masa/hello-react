// Reactモジュールをインポートする
import React from 'react';

// HelloWorldコンポーネントをエクスポートする
// React.Componentを継承する
export default class HelloWorld extends React.Component {

  // render()を記述する
  render() {
    // jsx形式で要素を返す
    return (
      <h1>Hello World!!</h1>
      );
  }

}
