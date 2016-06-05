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
      <input id={this.props.id} type={this.props.type} className="form-control" placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value} />
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
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  type: React.PropTypes.oneOf(['password', 'text'])
};
// デフォルト値(defaultProps)を設定する
// placeholder -> ''
// type -> text
// value -> ''
TextBox.defaultProps = {
  placeholder: '',
  type: 'text',
  value: ''
};
