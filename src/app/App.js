import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'store/config';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router } from './Router';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'ui/style/index.scss';

const App = () => (
  <div className="app-wrp">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={Router} />
      </ConnectedRouter>
    </Provider>
  </div>
);
export default App;
