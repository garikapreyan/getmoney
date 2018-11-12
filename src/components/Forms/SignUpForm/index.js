import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Form, Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import RenderField from '../RenderField';
import styles from '../styles';

class SignUpForm extends Component {
  render() {
    const { handleSubmit, classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Form className={classes.form} onSubmit={handleSubmit}>
          <Field name={'firstName'}
                 type={'text'}
                 placeholder={'First Name'}
                 label={'First Name'}
                 classes={classes}
                 component={RenderField}
          />
          <Field name={'lastName'}
                 type={'text'}
                 placeholder={'Last Name'}
                 label={'Last Name'}
                 classes={classes}
                 component={RenderField}
          />
          <Field name={'email'}
                 type={'email'}
                 placeholder={'Email'}
                 label={'Email'}
                 classes={classes}
                 component={RenderField}
          />
          <Field name={'password'}
                 type={'password'}
                 placeholder={'Password'}
                 label={'Password'}
                 classes={classes}
                 component={RenderField}
          />
          <Field name={'coPassword'}
                 type={'password'}
                 placeholder={'Confirm Password'}
                 label={'Confirm Password'}
                 classes={classes}
                 component={RenderField}
          />
          <button className={classes.button}>Sign Up</button>
        </Form>
        <p className={classes.colorWhite}>
          Already have an account?{' '}
          <Link to={'/login'}>Login</Link>
        </p>
      </div>
    );
  }
}

export default reduxForm({form: 'signUp'})(injectSheet(styles)(SignUpForm));