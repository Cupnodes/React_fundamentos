import React from 'react';

export default props => {
    return(
        <div>
            <h2>The value is {props.number}</h2>
            {
                props.number % 2 === 0 ? <h3>Even</h3> : <h3>Odd</h3>                
            }
            
        </div>
    )
}
