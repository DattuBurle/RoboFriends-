import React from 'react';

const scroll = (props) => {
    return (
        <div style = {{ overflow : 'scroll', height : '800px' }}>
            {props.children}
        </div>
    );
}

export default scroll;