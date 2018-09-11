import { CHANGE_THEME } from "../actions/theme/constants";

const inititalState = {
  activeTheme: "theme1"
};

import { IActionProps } from "./index";

export interface IthemeReducer {
  activeTheme: string;
}

export const themeReducer = (state = inititalState, action: IActionProps) => {
  switch (action.type) {
    case CHANGE_THEME:
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
