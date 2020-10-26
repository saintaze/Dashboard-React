export const SUBMIT_ACCOUNT_FORM_BEGIN = 'SUBMIT_ACCOUNT_FORM_BEGIN';
export const SUBMIT_ACCOUNT_FORM_SUCCESS = 'SUBMIT_ACCOUNT_FORM_SUCCESS';
export const SUBMIT_ACCOUNT_FORM_FAILURE = 'SUBMIT_ACCOUNT_FORM_FAILURE';

export const submitAccountFormBegin = () => ({
  type: SUBMIT_ACCOUNT_FORM_BEGIN
});

export const submitAccountFormSuccess = data => ({
  type: SUBMIT_ACCOUNT_FORM_SUCCESS,
  payload: { data }
});

export const submitAccountFormFailure = data => ({
  type: SUBMIT_ACCOUNT_FORM_FAILURE,
  payload: { data }
});