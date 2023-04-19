import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store';

import Home from './components/Home';
import Layout from './components/Layout';

const store = configStore();

export const App = React.memo(() => {
  return (
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>
  );
});

export default App;
