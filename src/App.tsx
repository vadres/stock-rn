import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {Home} from './pages/Home';
import reducers from './store/reducers';

export default () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
