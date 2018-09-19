import Constants from "./constants";

export const increment = () => {
  return { type: Constants.INCREMENT };
};

export const incrementAsync = () => ({
  type: Constants.INCREMENT_ASYNC
});

export const incrementSuccess = () => ({
  type: Constants.INCREMENT_SUCCESS
});

export const incrementAsyncSuccess = () => ({
  type: Constants.INCREMENT_ASYNC_SUCCESS
});

export const decrement = () => ({
  type: Constants.DECREMENT
});

export const decrementAsync = () => ({
  type: Constants.DECREMENT_ASYNC
});

export const decrementSuccess = () => ({
  type: Constants.DECREMENT_SUCCESS
});

export const decrementAsyncSuccess = () => ({
  type: Constants.DECREMENT_ASYNC_SUCCESS
});
