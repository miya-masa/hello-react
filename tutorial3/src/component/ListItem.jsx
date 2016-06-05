// Reactをインポート
import React from 'react';

// ListItemをエクスポート
export default class ListItem extends React.Component {
  // render()を実装する
  render() {
    // エレメント内の要素を表示する。
    // this.props.childerenで定義された要素を取得することが出来る。
    return (
      <li>{this.props.children}</li>
      );
  }
}
