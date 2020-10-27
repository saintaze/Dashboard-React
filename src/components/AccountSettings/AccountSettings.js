import React from 'react'
import PasswordStrengthBar from 'react-password-strength-bar'
import { withFormik, Form, Field } from "formik"
import * as yup from "yup"
import { connect } from 'react-redux'

import {mockSubmit} from '../../utilities';
import { openModal } from '../../store/actions/modalActions'
import {
  formSubmitBegin,
  formSubmitSuccess,
  formSubmitFailure
} from '../../store/actions/formActions'
import Modal from '../Modal/Modal'

import './AccountSettings.scss'


let AccountSettings = ({ touched, values, errors, isSubmitting }) => {

  const validateConfirmPassword = (actual_password, confirm_password) => {
    let error = '';
    if (actual_password && confirm_password) {
      if (actual_password !== confirm_password) {
        error = "Password does not match";
      }
    }
    return error;
  };

  const validatePassword = password => {
    let error = '';
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      error = "Password must be atleast 8 characters (one uppercase, one lowercase, one number and one symbol)";
    }
    return error;
  };

  const changeInputType = e => {
    e.target.type = 'password';
  }
 
  return (
    <div className="AccountSettings">
      <Modal />
      <h2 className="AccountSettings__heading">Your Account Settings</h2>
      <Form className="Form">
        <div className="Form__control">
          <label className="Form__label">Email Address</label>
          <Field
            className="Form__field"
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="off"
          />
          <p className="Form__error" style={{ opacity: errors.email ? 1 : 0 }}>
            {touched.email && errors.email}
          </p>
        </div>
        <div className="Form__control">
          <label className="Form__label">Password</label>
          <Field
            className="Form__field"
            type="text"
            name="password"
            placeholder="Enter Password"
            validate={validatePassword}
            onClick={changeInputType}
            onFocus={changeInputType}
          />
          <PasswordStrengthBar
            password={values.password}
            scoreWords={[]}
            minLength={0}
          />
          <p className="Form__error" style={{ opacity: errors.password ? 1 : 0 }}>
            {touched.password && errors.password}
          </p>
        </div>
        <div className="Form__control">
          <label className="Form__label">Confirm Password</label>
          <Field
            className="Form__field"
            type="password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            validate={value =>
              validateConfirmPassword(values.password, value)}
          />
          <p className="Form__error" style={{ opacity: errors.confirmPassword ? 1 : 0 }}>
            {touched.confirmPassword && errors.confirmPassword}
          </p>
        </div>
        <button className="Form__submit" disabled={isSubmitting} type="submit">
          Save
        </button>
      </Form>
    </div>
  );
}

AccountSettings = withFormik({
  mapPropsToValues({ email, password, confirmPassword }) {
    return {
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
    };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
  }),
  async handleSubmit(values, { props, resetForm, setSubmitting }) {
    const { email, password } = values;
    const payload = { email, password };
    props.dispatch(formSubmitBegin());
    props.dispatch(openModal());
    try {
      const data = await mockSubmit(payload);
      props.dispatch(formSubmitSuccess(data));
      resetForm();
    } catch (e) {
      props.dispatch(formSubmitFailure(e));
    } finally {
      setSubmitting(false);
    }
  }
})(AccountSettings);


const mapStateToProps = state => ({
  modalIsOpen: state.modal.open
});

export default connect(mapStateToProps)(AccountSettings);


