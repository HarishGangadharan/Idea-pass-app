import Constants from "./constants";

export const changeTheme = (selectedTheme: string) => ({
  selectedTheme,
  type: Constants.CHANGE_THEME
});
