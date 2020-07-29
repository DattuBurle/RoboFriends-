import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
// tachyons is just like a bootstarap, we can add inbuilt classes
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
