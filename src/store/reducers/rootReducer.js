import { combineReducers } from "redux";
import userForm from './userFormReducer';
import accountForm from './accountFormReducer';
import modal from './modalReducer';

export default combineReducers({
  userForm,
  accountForm,
  modal
});