import React, {Component} from 'react';
import injectSheet from 'react-jss';
import { Form, Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import renderField from '../RenderField';
import styles from '../styles';

class LoginForm extends Component {
  render() {
    const { handleSubmit, classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Form className={classes.form} onSubmit={handleSubmit}>
          <Field name={'email'}
                 type={'email'}
                 placeholder={'Email'}
                 label={'Email'}
                 classes={classes}
                 component={renderField}
          />
          <Field name={'password'}
                 type={'password'}
                 placeholder={'Password'}
                 label={'Password'}
                 classes={classes}
                 autoComplete={'current-password'}
                 component={renderField}
          />
          <button className={classes.button}>Login</button>
        </Form>
        <p className={classes.colorWhite}>
          Don't have an account yet?{' '}
          <Link to={'/signup'}>Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default reduxForm({form: 'login'})(injectSheet(styles)(LoginForm));