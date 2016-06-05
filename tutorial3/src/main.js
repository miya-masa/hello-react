/* eslint no-unused-vars: ["error", {"varsIgnorePattern": "React"}] */
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './component/HelloWorld.jsx';

ReactDOM.render(
  // name プロパティに文字列を設定する。
  <HelloWorld name="Taro Yamada" />,
  document.getElementById('contents')
);
