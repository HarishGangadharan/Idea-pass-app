import { RouterState } from 'connected-react-router';
import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';
import counterReducer from './counter';

const rootReducer = combineReducers({
  count: counterReducer,
  localize: localizeReducer
})

export interface IState {
  count: number,
  languageSelection: any,
  router: RouterState
}

export default rootReducer
