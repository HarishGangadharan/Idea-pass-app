import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import routes from './routes';

import './App.css';

interface IAppProps {
  history: History;
}

const App = ({ history }: IAppProps) => {
  return (
    <div className="appContainer">
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </div>
  );
};

export default App;
