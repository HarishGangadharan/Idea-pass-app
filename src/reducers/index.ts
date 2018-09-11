import { RouterState } from "connected-react-router";
import { localizeReducer } from "react-localize-redux";
import { combineReducers } from "redux";
import { counterReducer, ICounterReducer } from "./counter";
import { IthemeReducer, themeReducer } from "./theme";
import { IuserReducer, userReducer } from "./user";

const rootReducer = combineReducers({
  counter: counterReducer,
  localize: localizeReducer,
  theme: themeReducer,
  user: userReducer
});

export interface IActionProps {
  type: string;
  [key: string]: any;
}

export interface IState {
  counter: ICounterReducer;
  languageSelection: any;
  router: RouterState;
  theme: IthemeReducer;
  user: IuserReducer;
}

export default rootReducer;
