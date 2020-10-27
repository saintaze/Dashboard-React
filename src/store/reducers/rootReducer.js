import { combineReducers } from "redux";
import form from './formReducer';
import modal from './modalReducer';

export default combineReducers({
  form,
  modal
});