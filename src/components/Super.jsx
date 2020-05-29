import React, {useState} from "react";
import Sub from "./Sub";

export default (props) => {

    const [Value, setValue] = useState(0);
    const [Texto, setTexto] = useState('Value');

    function innerChange(value) {
        setTexto("random");
        setValue(value);
    }

    return (
        <div>
            <h2>{Texto}: {Value}</h2>
            <Sub clickIn={innerChange}></Sub>
        </div>
    );
};
