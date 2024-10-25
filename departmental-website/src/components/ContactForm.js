// src/components/ContactForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'react-bootstrap';
import * as Yup from 'yup';

const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    setSubmitted(true);
    resetForm();
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {submitted && <Alert variant="success">Your message has been sent!</Alert>}
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {formik => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field as="textarea" name="message" className="form-control" rows="5" />
              <ErrorMessage name="message" component="div" className="text-danger" />
            </div>

            <Button variant="primary" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
