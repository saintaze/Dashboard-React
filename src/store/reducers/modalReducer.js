import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modalActions';

const initialState = {
  isOpen: false
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
       isOpen: true
      };

    case CLOSE_MODAL:
      // All done: set loading "false".
      return {
        ...state,
        isOpen: false
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}