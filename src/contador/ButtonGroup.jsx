import React from "react";

export default (props) => {
    return (
        <div className="btn-group">
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
        </div>
    );
};
