import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {store, history} from './store/persistStore'

ReactDOM.render(<App store={store} history={history}/>, document.getElementById('root'));
registerServiceWorker();
