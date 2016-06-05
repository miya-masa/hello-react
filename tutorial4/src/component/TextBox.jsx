// reactのインポート
import React from 'react';

// テキストボックス。dumbコンポーネント
export default class TextBox extends React.Component {

  render() {
    return (
      <div className="form-group">
      <label htmlFor={this.props.id}>{this.props.label}</label>
      {
      // 属性を設定する
      // id -> props.id
      // type -> props.type
      // placeholder -> props.placeholder
      // onChange -> props.onChange
      // value -> props.value
      }
      <input id=/* TODO */ type=/* TODO */ className="form-control" placeholder=/* TODO */ onChange=/* TODO */ value=/* TODO */ />
    </div>
      );
  }
}

// TextboxのpropTypesを設定する
// id -> 文字列 必須
// label -> 文字列 必須
// placeholder -> 文字列
// value -> 文字列
// onChange -> 関数
// type -> password か text
// React.Proptypes.oneOf([]);を利用する
TextBox.propTypes = {
};
// デフォルト値(defaultProps)を設定する
// placeholder -> ''
// type -> text
// value -> ''
TextBox.defaultProps = {
};
