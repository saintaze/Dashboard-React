export const FORM_SUBMIT_BEGIN = 'FORM_SUBMIT_BEGIN';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_FAILURE = 'FORM_SUBMIT_FAILURE';

export const formSubmitBegin = () => ({
  type: FORM_SUBMIT_BEGIN
});

export const formSubmitSuccess = data => ({
  type: FORM_SUBMIT_SUCCESS,
  payload: {...data}
});

export const formSubmitFailure = data => ({
  type: FORM_SUBMIT_FAILURE,
  payload: { ...data }
});