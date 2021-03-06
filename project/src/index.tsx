import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import { rootReducer } from './store/root-reducer';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/action';
import { AppRoute, AuthorizationStatus } from './const';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import browserHistory from './browser-history';
import { configureStore } from '@reduxjs/toolkit';
import {Router as  BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
  () => browserHistory.push(AppRoute.NotFound),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
