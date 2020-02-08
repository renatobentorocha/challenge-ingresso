import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import Index from './pages';
import store from './store';

import GlobalStyle from './styles/global';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Index />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
