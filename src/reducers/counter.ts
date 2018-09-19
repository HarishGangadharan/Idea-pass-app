import Constants from "../actions/counter/constants";

import { IActionProps } from "./index";

interface ICounterReducer {
  count: number;
  isLoading: boolean;
}

const initialState = {
  count: 0,
  isLoading: false
};

const counterReducer = (state = initialState, action: IActionProps) => {
  switch (action.type) {
    case Constants.INCREMENT:
      return {
        ...state,
        isLoading: true
      };
    case Constants.INCREMENT_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
        isLoading: false
      };
    case Constants.INCREMENT_ASYNC:
      return {
        ...state,
        isLoading: true
      };
    case Constants.INCREMENT_ASYNC_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
        isLoading: false
      };
    case Constants.DECREMENT:
      return {
        ...state,
        isLoading: true
      };
    case Constants.DECREMENT_SUCCESS:
      return {
        ...state,
        count: state.count - 1,
        isLoading: false
      };
    case Constants.DECREMENT_ASYNC:
      return {
        ...state,
        isLoading: true
      };
    case Constants.DECREMENT_ASYNC_SUCCESS:
      return {
        ...state,
        count: state.count - 1,
        isLoading: false
      };
    default:
      return state;
  }
};

export { counterReducer, ICounterReducer };
