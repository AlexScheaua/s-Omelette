import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar'
import Home from './home'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Navbar />, document.getElementById('top'));


serviceWorker.unregister();
