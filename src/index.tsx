import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LocalizeProvider } from 'react-localize-redux';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { setupInterceptors } from './global/interceptors';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import ability from './ability';
import { AbilityContext } from './ability-context';

import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();

const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);

setupInterceptors(store);

class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      store
    };
  }

  public render() {
    return (
      <Provider store={store}>
        <LocalizeProvider store={this.state.store}>
          <AbilityContext.Provider value={ability}>
            <App history={history} />
          </AbilityContext.Provider>
        </LocalizeProvider>
      </Provider>
    );
  }
}


ReactDOM.render(<Main />, document.getElementById('root') as HTMLElement);

registerServiceWorker();

export default store;
