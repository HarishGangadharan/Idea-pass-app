import FormConstants from '../actions/form/constants';

interface IFormReducer {
  formJson: any,
  isLoading: boolean
}

const initialState = {
  formJson: {},
  isLoading: false
};

const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FormConstants.FORM_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormConstants.FORM_SUCCESS:
      return {
        ...state,
        formJson: action.payload,
        isLoading: false
      };
    case FormConstants.FORM_FAILURE:
      return {
        ...state,
        formJson: state.formJson,
        isLoading: false
      };
    default:
      return state;
  }
};

export { formReducer, IFormReducer };
