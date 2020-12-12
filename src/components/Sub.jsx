import React from 'react';

export default props => 
    <div>
        <button onClick={() => {props.clickIn(Math.random())}}>Change</button>
    </div>

