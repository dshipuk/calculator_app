import React from "react";

const CalculatorDisplay = ({text}) => {
    return (
        <input
            value={text}
            readOnly={true}
        />
    )
}

export default CalculatorDisplay;