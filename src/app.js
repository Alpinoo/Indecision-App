import ReactDOM from 'react-dom';
import React from 'react';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; //node modules - normalize css
//!normalize css is a css resetter. It guarantees that every browser will start from the same point. They cannot use their own styles. It helps to create more fluent app in multi-platform
import './styles/styles.scss';

ReactDOM.render(
   <IndecisionApp />,
   document.getElementById('app')
);
