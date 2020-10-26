export const SUBMIT_USER_FORM_BEGIN = 'SUBMIT_USER_FORM_BEGIN';
export const SUBMIT_USER_FORM_SUCCESS = 'SUBMIT_USER_FORM_SUCCESS';
export const SUBMIT_USER_FORM_FAILURE = 'SUBMIT_USER_FORM_FAILURE';

export const submitUserFormBegin = () => ({
  type: SUBMIT_USER_FORM_BEGIN
});

export const submitUserFormSuccess = () => ({
  type: SUBMIT_USER_FORM_SUCCESS
});

export const submitUserFormFailure = error => ({
  type: SUBMIT_USER_FORM_FAILURE,
  payload: { error }
});