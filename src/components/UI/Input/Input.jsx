import React from "react";
import "./Input.css";
const Input = ({ id, label, placeholder, type, ...rest }) => {
  return (
    <form className="Input">
      <label htmlFor={id} className="labelB">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder || " "}
        id={id}
        {...rest}
        className="input"
      />
    </form>
  );
};

export default Input;
