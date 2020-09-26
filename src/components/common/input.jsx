import React from "react";

const Input = ({ name, label, errors, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        className="form-control"
        id={name}
        name={name}
        placeholder={`Enter ${name}`}
      />
      {errors && (
        <div className="alert alert-danger" role="alert">
          {errors}
        </div>
      )}
    </div>
  );
};

export default Input;
