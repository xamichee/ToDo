import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

import App from './App/App';

ReactDom.render(<App />, document.getElementById('root'));
setInterval(() => ReactDom.render(<App />, document.getElementById('root')), 3000);

