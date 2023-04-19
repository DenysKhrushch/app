import React, { memo } from 'react';
import { Provider } from 'react-redux';

import Home from './components/Home';
import Layout from './components/Layout';
import { store } from './store';

export const App = memo(() => {
  return (
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>
  );
});

export default App;
