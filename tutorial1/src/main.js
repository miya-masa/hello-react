/* eslint no-unused-vars: ["error", {"varsIgnorePattern": "React"}] */
// Reactをインポートする
import React from 'react';
// ReactDomをインポートする
import ReactDOM from 'react-dom';

// ReactDomで"#contents"に対して<h1>Hello World!!</h1>レンダリングする。
ReactDOM.render(
  <h1>Hello World!!</h1>,
  document.getElementById('contents')
);
