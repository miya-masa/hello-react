// reactのインポート
import React from 'react';

// サブミットボタン。dumbコンポーネント
export default class SubmitButton extends React.Component {

  render() {
    // valueとonClickにそれぞれvalueとhandleSubmitをpropsから設定する
    return (<input type="submit" className="btn btn-default" value={this.props.value} onClick={this.props.handleSubmit} />);
  }
}

// propTypesを設定スr
// value -> 文字列 必須
// handleSubmit -> 関数 必須
SubmitButton.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};
