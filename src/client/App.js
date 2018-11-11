import React, { Component } from 'react';
import './app.css';
import { Provider } from 'react-redux';

import store from './store';
import AddUser from './components/AddUser';

/* eslint-disable-next-line react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <AddUser email="" password="" />
        </div>
      </Provider>
    );
  }
}
/* eslint-enable */

export default App;
