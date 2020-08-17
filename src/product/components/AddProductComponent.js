import React, { Component, Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { CssBaseline, Card, Container, Grid, IconButton, MenuItem, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../style.scss'

const fragilities = [
  { value: 'GLASS', label: 'GLASS' },
  { value: 'LABORATORY_MATERIALS', label: 'LABORATORY_MATERIALS' },
  { value: 'TECHNOLOGICAL_ACCESSORIES', label: 'TECHNOLOGICAL_ACCESSORIES' },
  { value: 'MARBLE', label: 'MARBLE' },
  { value: 'TILES', label: 'TILES' },
  { value: 'PORCELAINS', label: 'PORCELAINS' },
  { value: 'OPTICAL_INSTRUMENTS', label: 'OPTICAL_INSTRUMENTS' },
  { value: 'VALUABLE_COLLECTIBLES', label: 'VALUABLE_COLLECTIBLES' },
];

const categories = [
  { value: 'PLOMBERIEN', label: 'PLOMBERIEN' },
  { value: 'ELECTRICITE', label: 'ELECTRICITE' },
  { value: 'QUINCAILLERIE', label: 'QUINCAILLERIE' },
  { value: 'PEINTURE', label: 'PEINTURE' },
  { value: 'CONSTRUCTION', label: 'CONSTRUCTION' },
  { value: 'ADHESIFS_COLLES', label: 'ADHESIFS_COLLES' },
  { value: 'ROBINETTERIE', label: 'ROBINETTERIE' },
  { value: 'AUTRES', label: 'AUTRES' },
];


export default class AddProductComponent extends Component {

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Container className="padding-20">
          <Card className="padding-20">
            <IconButton aria-label="update product" component="span" onClick={() => { this.props.history.goBack() }}>
              <ArrowBackIcon />
            </IconButton>
            <hr className="margin-20" />
            <Formik
              initialValues={{
                name: '',
                description: '',
                fragility: '',
                category: '',
                price: 0
              }}
              validate={values => {
                const errors = {};
                if (!values.name) {
                  errors.name = 'Required';
                }
                if (!values.description) {
                  errors.description = 'Required';
                }
                if (!values.fragility) {
                  errors.fragility = 'Required';
                }
                if (!values.category) {
                  errors.category = 'Required';
                }
                if (values.price <= 0) {
                  errors.price = 'Required';
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
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Field
                      component={TextField}
                      name="name"
                      type="text"
                      label="Product Name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      component={TextField}
                      name="price"
                      type="number"
                      label="price"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      component={Select}
                      name="fragility"
                      variant="outlined"
                      fullWidth
                    >
                      {fragilities.map(fragility => (
                        <MenuItem key={fragility.value} value={fragility.value}>{fragility.label}</MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      component={Select}
                      name="category"
                      variant="outlined"
                      fullWidth
                    >
                      {categories.map(category => (
                        <MenuItem key={category.value} value={category.value}>{category.label}</MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      name="description"
                      label="Description"
                      multiline
                      rows="4"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <hr className="margin-20" />
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => console.log("onclick")}
                  >
                    Submit
                  </Button>
                </Grid>
              </Form>
            </Formik>
          </Card>
        </Container>
      </Fragment>
    )
  }
}
