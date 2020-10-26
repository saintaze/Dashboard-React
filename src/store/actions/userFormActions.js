export const SUBMIT_USER_FORM_BEGIN = 'SUBMIT_USER_FORM_BEGIN';
export const SUBMIT_USER_FORM_SUCCESS = 'SUBMIT_USER_FORM_SUCCESS';
export const SUBMIT_USER_FORM_FAILURE = 'SUBMIT_USER_FORM_FAILURE';

export const submitUserFormBegin = () => ({
  type: SUBMIT_USER_FORM_BEGIN
});

export const submitUserFormSuccess = data => ({
  type: SUBMIT_USER_FORM_SUCCESS,
  payload: {...data}
});

export const submitUserFormFailure = data => ({
  type: SUBMIT_USER_FORM_FAILURE,
  payload: { ...data }
});