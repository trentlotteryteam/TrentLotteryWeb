import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './store/persistStore'
import rootRoutes from './route'
import './App.css';

class App extends Component {
  
  shouldComponentUpdate () {
    return false
  }
  
  render() {
    return (
      <Provider store={this.props.store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={this.props.history}>
            {rootRoutes}
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
