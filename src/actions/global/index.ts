import Constants from './constants';

export const updateLoggedInStatus = (userStatus: any) => {
  return { type: Constants.SET_LOGGED_IN_STATUS, userStatus };
};

export const updateUserRole = (userRole: string) => {
  return { type: Constants.SET_USER_ROLE, userRole };
};

export const incrementLoaderQueue = () => {
  return { type: Constants.INCREMENT_LOADER_QUEUE };
};

export const decrementLoaderQueue = () => {
  return { type: Constants.DECREMENT_LOADER_QUEUE };
};
