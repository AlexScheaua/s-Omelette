import React from 'react';
import ReactDOM from 'react-dom';
//import First from './First';
import Navbar from './navbar'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navbar />, document.getElementById('root'));

serviceWorker.unregister();
