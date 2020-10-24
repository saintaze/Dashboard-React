import React from 'react'

import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import PasswordStrengthBar from 'react-password-strength-bar';

import './AccountSettings.scss'


let AccountSettings = ({ touched, values, errors, isSubmitting }) => {

  const validateConfirmPassword = (actual_password, confirm_password) => {
    if (actual_password && confirm_password) {
      if (actual_password !== confirm_password) {
        return "Password does not match";
      }
    }
  };

  const validatePassword = password => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return "Password must be atleast 8 characters (one uppercase, one lowercase, one number and one symbol)";
    }
  };

  const changeInputType = e => {
    e.target.type = 'password';
  }
 
  return (
    <div className="AccountSettings">
      <h2 className="AccountSettings__heading">Your Account Settings</h2>
      <Form className="Form">
        <div className="Form__control">
          <label className="Form__label">Email Address</label>
          <Field
            className="Form__field"
            type="email"
            name="email"
            placeholder="Enter Email"
            autocomplete="off"
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
        <button className="Form__submit" disabled={isSubmitting}>
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
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "andrew@test.io") {
        setErrors({ email: "That email is already taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(AccountSettings);

export default AccountSettings;
