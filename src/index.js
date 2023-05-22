// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const App = () => (
  <div className="app">
    <h1>
      Basic{" "}
      <a
        href="https://github.com/jaredpalmer/formik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Formik
      </a>{" "}
      Demo
    </h1>

    <Formik
      initialValues={{ first_name: "", last_name: "", phone_number: "" }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
        phone_number: Yup.string().required("Phone number is required")
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="first_name" style={{ display: "block" }}>
              First Name
            </label>
            <input
              id="first_name"
              placeholder="Enter your first name"
              type="text"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.first_name && touched.first_name
                  ? "text-input error"
                  : "text-input"
              }
            />
            <label htmlFor="last_name" style={{ display: "block" }}>
              Last Name
            </label>
            <input
              id="last_name"
              placeholder="Enter your last name"
              type="text"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.last_name && touched.last_name
                  ? "text-input error"
                  : "text-input"
              }
            />
            <label htmlFor="phone_number" style={{ display: "block" }}>
              Phone Number
            </label>
            <input
              id="phone_number"
              placeholder="Enter your phone number"
              type="text"
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.phone_number && touched.phone_number
                  ? "text-input error"
                  : "text-input"
              }
            />

            {errors.first_name && touched.first_name && (
              <div className="input-feedback">{errors.first_name}</div>
            )}

            {errors.last_name && touched.last_name && (
              <div className="input-feedback">{errors.last_name}</div>
            )}

            {errors.phone_number && touched.phone_number && (
              <div className="input-feedback">{errors.phone_number}</div>
            )}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>

    <MoreResources />
  </div>
);

render(<App />, document.getElementById("root"));
