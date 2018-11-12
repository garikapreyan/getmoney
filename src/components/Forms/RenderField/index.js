import React from 'react';

const RenderFireld = ({input, name, label, type, autoComplete, placeholder, classes}) => (
  <div className={classes.fieldWrapper||''}>
    <label htmlFor={name} className={classes.label}>{label}</label>
    <input {...input}
           type={type}
           autoComplete={autoComplete||''}
           placeholder={placeholder||''}
           className={`${classes.field||''} form-control`}
    />
  </div>
);

export default RenderFireld;