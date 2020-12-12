import React, {useState} from 'react';

export default props => {
    const [value, setValue] = useState(Array(props.numberFields).fill(0));

    function generateNewNumbers(array) {
        const max = 99
        const min = 1
        const newNumber = parseInt(Math.random() * (max - min)) + min

        return array.includes(newNumber) ? generateNewNumbers(array) : newNumber
    }

    function generateNumbers() {
        const newArray = Array(props.numberFields).fill(0).reduce((current) => [...current, generateNewNumbers(current)], [])
        .sort((a,b) => a - b)
        setValue(newArray)
    }

    return(
        <div>
            <h2>Lottery</h2>
            <h3>{value.join(' ')}</h3>
            <button onClick={generateNumbers}>Generate Numbers</button>
        </div>
    )
}
