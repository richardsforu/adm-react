import { useEffect, useState } from 'react';

const UseEffectV1 = () => {

    const [value, setValue] = useState(0)

    function increment() {
        setValue(value + 1)
    }
    function decrement() {
        setValue(value - 1)
    }

    return (
        <div>

            <h1>Value: {value}</h1>
            <button onClick={increment} className="btn btn-primary" style={{margin:"5px"}}>+</button>
            <button onClick={decrement} className="btn btn-primary" style={{margin:"5px"}}>-</button>
            <button onClick={e=>setValue(0)} className="btn btn-warning" style={{margin:"5px"}}>Reset</button>




        </div>
    );
};

export default UseEffectV1;