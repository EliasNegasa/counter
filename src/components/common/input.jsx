import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

const Input = ({ name, label, errors, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <StyledInput
        id={name}
        {...rest}
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
