import {
  CHANGE_THEME
} from "./constants";

export const changeTheme = (selectedTheme: string) => ({
  selectedTheme,
  type: CHANGE_THEME
});
