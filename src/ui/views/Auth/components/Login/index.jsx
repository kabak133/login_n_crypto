import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './index.scss';

const SignupSchema = Yup.object()
  .shape({
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });


const Signup = ({ handleLogin }) => {
  const [userData, setData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    handleLogin(userData);
  };

  const validatedFrom = (touched) => {
    return Object.keys(touched).length ? 'was-validated1' : '';
  };

  const fieldClass = (errors, touched, nameField) => {
    if (errors[nameField] === undefined && touched[nameField] === undefined) {
      return '';
    } else if (errors[nameField] && touched[nameField] === true) {
      return 'is-invalid';
    } else {
      return 'is-valid';
    }
  };

  return (

    <div className="container">
      <div
        className="row full-height justify-content-center align-content-center">
        <div className="col-sm-7">
          <div className="card">
            <div className="card-header">
              LOG IN
            </div>
            <div className="card-body">

              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
              >

                {({ errors, touched }) => {

                  return (
                    <Form className={`needs-validation ${validatedFrom(touched)}`}>

                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <Field
                          type="email"
                          name="email"
                          className={`form-control ${ fieldClass(errors, touched, 'email')} }`}
                          placeholder="Enter email"/>
                        <small id="emailHelp"
                               className="form-text text-muted">We'll never share
                          your email with anyone else.
                        </small>

                        {errors.email && touched.email ? (
                          <div className="invalid-feedback">{errors.email}</div>
                        ) : null}

                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <Field type="password"
                               name="password"
                               className={`form-control ${fieldClass(errors, touched, 'password')}`}
                               placeholder="Password"/>
                        {errors.password && touched.password ? (
                          <div className="invalid-feedback">{errors.password}</div>
                        ) : null}
                      </div>

                      <button className="btn" type="submit">LogIn
                      </button>
                    </Form>
                  );


                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
