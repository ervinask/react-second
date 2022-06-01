import React from "react";
import "./Button.css";

const Button = ({ type, children, handleClick }) => {
  return (
    children && (
      <button type={type} onClick={handleClick}>
        {children}
      </button>
    )
  );
};

export default Button;
