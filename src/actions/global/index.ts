import Constants from './constants';

export const updateLoggedInStatus = (userStatus: any) => {
  return { type: Constants.SET_LOGGED_IN_STATUS, userStatus };
};
