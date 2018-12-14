import Constants from '../actions/theme/constants';
import { AppProperties } from '../constants/application.properties';
import storage from '../utils/storage';

const inititalState = {
  activeTheme: storage.getItem(AppProperties.ACTIVE_THEME) ? storage.getItem(AppProperties.ACTIVE_THEME) : 'theme1'
};

import { IActionProps } from './index';

export interface IthemeReducer {
  activeTheme: string;
}

export const themeReducer = (state = inititalState, action: IActionProps) => {
  switch (action.type) {
    case Constants.CHANGE_THEME:
      storage.setItem(AppProperties.ACTIVE_THEME, action.selectedTheme);
      return {
        ...state,
        activeTheme: action.selectedTheme
      };
    default:
      return {
        ...state
      };
  }
};
