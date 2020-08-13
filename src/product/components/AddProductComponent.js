import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
// import { Formik, Form, Field } from 'formik';
// import { TextField } from 'formik-material-ui';
import IconButton from '@material-ui/core/IconButton';
import { CssBaseline, Card, Container } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../style.scss'

export default class AddProductComponent extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Container>
          <Card className="card-padding">
              <IconButton aria-label="update product" component="span" onClick={()=>{this.props.history.goBack()}}>
                <ArrowBackIcon />
              </IconButton>
            {/* <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}>
              <Form>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                />
              </Form>
            </Formik> */}
          </Card>
        </Container>
      </Fragment>
    )
  }
}
