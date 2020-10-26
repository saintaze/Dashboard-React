import { combineReducers } from "redux";
import userForm from './userFormReducer';
import accountForm from './accountFormReducer';

export default combineReducers({
  userForm,
  accountForm
});