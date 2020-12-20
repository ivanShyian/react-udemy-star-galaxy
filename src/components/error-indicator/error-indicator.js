import React from 'react';
import './error-indicator.css'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span>Something gone Wrong :(</span>
            <span>(: Just try to reload page</span>
        </div>
    )
}

export default ErrorIndicator;