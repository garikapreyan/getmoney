import React, {Component} from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import injectSheet from 'react-jss';

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
      </div>
    );
  }
}

export default reduxForm({form: 'login'})(injectSheet(styles)(LoginForm));