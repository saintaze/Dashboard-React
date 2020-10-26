import {
  SUBMIT_ACCOUNT_FORM_BEGIN,
  SUBMIT_ACCOUNT_FORM_SUCCESS,
  SUBMIT_ACCOUNT_FORM_FAILURE
} from '../actions/accountFormActions';

const initialState = {
  loading: false,
  error: null,
  data: null
};

export default function accountFormReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_ACCOUNT_FORM_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case SUBMIT_ACCOUNT_FORM_SUCCESS:
      // All done: set loading "false".
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SUBMIT_ACCOUNT_FORM_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}