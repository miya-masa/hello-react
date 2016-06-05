// reactのインポート
import React from 'react';

// Messageboxを作成する。dumbコンポーネント
export default class MessageBox extends React.Component {

  // コンポーネントが更新した時のイベントリスナメソッド
  componentDidUpdate() {
    // プロパティがopenの場合ダイアログを開く
    if (this.props.open) {
      // windos.$でグローバルのjQueryにアクセス。
      // ES2015変数の埋め込みテンプレート
      window.$(`#${this.props.id}`).modal({
        'show': true,
        'backdrop': false
      });
    } else {
      window.$(`#${this.props.id}`).modal({
        'show': false,
        'backdrop': false
      });
    }
  }

  render() {
    // ダイアログを作成する
    return (
      // id属性にプロパティidを指定
      <div id={this.props.id} className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              {
      // onclickにpropのhandleCloseを指定する
      }
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.handleClose}><span aria-hidden="true">×</span></button>
              <h4 className="modal-title">結果</h4>
            </div>
            <div className="modal-body">
              {
      // onclickにpropのmessage表示する
      }
              <p>{this.props.message}</p>
            </div>
            <div className="modal-footer">
              {
      // onclickにpropのhandleCloseを指定する
      }
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.handleClose}>Close</button>
            </div>
          </div>
        </div>
    </div>
      );
  }
}

// MessageboxのPropTypesを指定する
// id -> 文字列かつ必須
// message -> 文字列かつ必須
// handleClose -> 関数かつ必須
MessageBox.PropTypes = {
  id: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  handleClose: React.PropTypes.func.isRequired
};
