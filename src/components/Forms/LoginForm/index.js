import React, {Component, Fragment} from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import injectSheet from 'react-jss';
import { Button } from 'mdbreact';

import styles from '../styles';

const renderField = ({input, name, label, type, autoComplete, placeholder, classes}) =>
  <div className={classes.fieldWrapper||''}>
    <label htmlFor={name} className={classes.label}>{label}</label>
    <input {...input}
           type={type}
           autoComplete={autoComplete||''}
           placeholder={placeholder||''}
           className={`${classes.field||''} form-control`}
    />
  </div>;

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
      </div>
    );
  }
}

export default reduxForm({form: 'login'})(injectSheet(styles)(LoginForm));