import React from "react";
import './Button.css'
const Button = ({ btnN, onClick }) => {
  return <button className="button" onClick={onClick}>{btnN}</button>;
};

export default Button;
