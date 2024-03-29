import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
