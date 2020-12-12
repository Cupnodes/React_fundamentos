import React from "react";

export default (props) => {
    return (
        <div>
            <label htmlFor="inputStep">Step:</label>
            <input
                type="text"
                id="inputStep"
                onChange={e => props.changeStepForm(+e.target.value)}
            />
        </div>
    );
};
