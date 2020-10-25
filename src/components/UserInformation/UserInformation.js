import React from 'react'

import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

import './UserInformation.scss'



let UserInformation = ({touched, values, errors, isSubmitting }) => {

  return (
    <div className="UserInfo">
      <h2 className="UserInfo__heading">Your User Information</h2>
      <Form className="Form">

      <div className="Form__split">
        <div className="Form__control">
          <label className="Form__label">First Name</label>
          <Field
            className="Form__field"
            type="firstName"
            name="firstName"
            placeholder="Enter First Name"
          />
          <p className="Form__error" style={{ opacity: errors.firstName ? 1 : 0 }}>
            {touched.firstName && errors.firstName}
          </p>
        </div>

        <div className="Form__control">
          <label className="Form__label">Last Name</label>
          <Field
            className="Form__field"
            type="lastName"
            name="lastName"
            placeholder="Enter Last Name"
          />
          <p className="Form__error" style={{ opacity: errors.lastName ? 1 : 0 }}>
              {touched.lastName && errors.lastName}
          </p>
        </div>
      </div>
        <div className="Form__control">
          <label className="Form__label">Street Address</label>
          <Field
            className="Form__field"
            type="streetAddress"
            name="streetAddress"
            placeholder="Enter Street Address"
          />
          <p className="Form__error" style={{ opacity: errors.streetAddress ? 1 : 0 }}>
            {touched.streetAddress && errors.streetAddress}
          </p>
        </div>

      <div className="Form__split">
        <div className="Form__control">
          <label className="Form__label">House Number</label>
          <Field
            className="Form__field"
            type="houseNumber"
            name="houseNumber"
            placeholder="Enter House Number"
          />
          <p className="Form__error" style={{ opacity: errors.houseNumber ? 1 : 0 }}>
              {touched.houseNumber && errors.houseNumber}
          </p>
        </div>

        <div className="Form__control">
          <label className="Form__label">Zip Code</label>
          <Field
            className="Form__field"
            type="zipCode"
            name="zipCode"
            placeholder="Enter Zip Code"
          />
          <p className="Form__error" style={{ opacity: errors.zipCode ? 1 : 0 }}>
            {touched.zipCode && errors.zipCode}
          </p>
        </div>
      </div>

        <div className="Form__control">
          <label className="Form__label">Country</label>
          <Field
            className="Form__field Form__field--select"
            component="select"
            name="country"
          >
            <option value="" disabled>Select Country</option>
            <option value="germany">Germany</option>
            <option value="austria">Austria</option>
            <option value="switzerland">Switzerland</option>
          </Field>
          <p className="Form__error" style={{ opacity: errors.country ? 1 : 0 }}>
            {touched.country && errors.country}
          </p>
        </div>
        
        <button className="Form__submit" disabled={isSubmitting}>
          Save
        </button>
      </Form>
    </div>
  );
}

UserInformation = withFormik({
  mapPropsToValues({ firstName, lastName, streetAddress, houseNumber, zipCode, country }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      streetAddress: streetAddress || "",
      houseNumber: houseNumber || "",
      zipCode: zipCode || "",
      country: country || ""
    };
  },
  validationSchema: yup.object().shape({
    firstName: yup
      .string()
      .matches(/^[a-zA-z]*$/, 'First Name can only contain letters')
      .required("First name is required"),
    lastName: yup
      .string()
      .matches(/^[a-zA-z]*$/, 'Last Name can only contain letters')
      .required("Last name is required"),
    streetAddress: yup
      .string()
      .required("Street Address is required"),
    houseNumber: yup
      .string()
      .required("House Number is required"),
    zipCode: yup
      .string()
      .required("Zip Code is required"),
    country: yup
      .string()
      .required("Country is required")
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
})(UserInformation);

export default UserInformation;
