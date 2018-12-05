import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar'
import Home from './home'
import Products from './products'
import Newsletter from './newsletter'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Navbar />, document.getElementById('top'));
ReactDOM.render(<Products />, document.getElementById('products'));
ReactDOM.render(<Newsletter />, document.getElementById('newsletter'));


serviceWorker.unregister();
