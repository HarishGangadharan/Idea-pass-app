import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import routes from './routes';
import WithRoot from './WithRoot';

import './App.css';

interface IAppProps {
  history: History;
}

const App = ({ history }: IAppProps) => {
  return (
    <div className="appContainer">
      <WithRoot>
        <ConnectedRouter history={history}>
          { routes }
        </ConnectedRouter>
      </WithRoot>
    </div>
  );
};

export default App;
