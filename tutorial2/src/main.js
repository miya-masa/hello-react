/* eslint no-unused-vars: ["error", {"varsIgnorePattern": "React"}] */
import React from 'react';
import ReactDOM from 'react-dom';
// jsxコンポーネントをインポートする
import HelloWorld from './component/HelloWorld.jsx';

ReactDOM.render(
  // jsxコンポーネントを描画する
  <HelloWorld />,
  document.getElementById('contents')
);
