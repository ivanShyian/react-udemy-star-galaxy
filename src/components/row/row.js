import React from 'react';
import PropTypes from 'prop-types';
import './row.css';

const Row = ({left, right}) => {
    return (
        <div className='app-main'>
            <div className='app-main-item-list'>
                {left}
            </div>
            <div className='app-main-details'>
                {right}
            </div>
        </div>
    )
};
Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}
export default Row;