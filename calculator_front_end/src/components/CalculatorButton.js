import React from "react";

const CalculatorButton = ({ caption }) => {
  return (
    <input
      type="button"
      value={caption}
      className={caption === "=" ? "calculator-equal-button" : null}
    />
  );
};

export default CalculatorButton;
