import React from "react";

const CalculatorDisplay = ({text}) => {
    return (
        <input
            value={text}
            readOnly={true}
            className="calculator-display"
        />
    )
}

export default CalculatorDisplay;