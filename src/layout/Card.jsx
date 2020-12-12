import React from 'react';
import './index.css';

export default props => 
    <div className="card">
        <div className="content">
            {props.children}
        </div>
        <div className="footer" style={{backgroundColor: props.color}}>
            {props.footer}
        </div>
    </div>
