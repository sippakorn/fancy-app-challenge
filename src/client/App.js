import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
// import Login from './components/Login';
import AddUser from './components/AddUser';

const GlobalStyle = createGlobalStyle`
  body {
    color: rgba(#000000, 0.8);
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 1.6em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

/* eslint-disable-next-line react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyle />
          <AddUser email="" password="" passwordRetype="" />
        </div>
      </Provider>
    );
  }
}
/* eslint-enable */

export default App;
