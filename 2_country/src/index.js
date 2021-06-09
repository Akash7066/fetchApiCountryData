import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//
// hm index.js me store use q krte hai.. q wo.. 1st file hot ar.. bol skte ke... wo parent file hai.. jisle wjh se sare components use kr skte hai
import store from './Redux/store';
// import { Provider } from 'react-redux';
import {Provider} from 'react-redux'
// provider data dalne ka km karega


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
