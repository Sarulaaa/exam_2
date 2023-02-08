import React from "react";
import styles from "./style.module.css";
import { getClasses } from "./getClasses";

const Button = ({ variant, text}) => {
  const buttonTypes = {
    blue: "blue",
    red: "red",
    green: "green"
  };
  return (
    <>
      <button
        className={getClasses([
          styles.button,
          styles[`button-${buttonTypes[variant]}`],
        ])}
      >
      </button>
    </>
  );
};
export default Button;
