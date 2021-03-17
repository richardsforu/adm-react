import React from 'react';
import {useSelector} from 'react-redux'
const MyComponent = () => {
    const count = useSelector(state => state.counter);
    return (
        <div>
            <h1>Counter : {count}</h1>

        </div>
    );
};

export default MyComponent;