import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './store';

import GlobalStyle from './styles/global';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
