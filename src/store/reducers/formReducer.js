import {
  FORM_SUBMIT_BEGIN,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILURE
} from '../actions/formActions';

const initialState = {
  loading: false,
  data: null
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_SUBMIT_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        data: null
      };

    case FORM_SUBMIT_SUCCESS:
      // All done: set loading "false".
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case FORM_SUBMIT_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      return {
        ...state,
        loading: false,
        data: action.payload,
        // error: action.payload,
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}