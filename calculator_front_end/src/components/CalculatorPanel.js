import React from 'react'
import CalculatorButton from './CalculatorButton'
import CalculatorDisplay from './CalculatorDisplay';


const CalculatorPanel = () => {
    const captions = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "C", "+",
        "=",
    ];

    const  calc_buttons = captions.map((value, index) => {
        return <CalculatorButton key={index} caption={value} />
    })

    return (
        <div className='calculator-grid-container'>
            <CalculatorDisplay text="" />
            {calc_buttons}
        </div>
    )
}

export default CalculatorPanel