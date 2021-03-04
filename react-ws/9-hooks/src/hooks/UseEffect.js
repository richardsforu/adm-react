import { useState, useEffect } from 'react';

const UseEffect = () => {


    console.log("APP Component::");
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(1)
    const [multiply, setMultiply] = useState(1)

    useEffect(() => {
        // bl
        console.log("useEffect:: Every Time when count changes");
    }, [count])

    useEffect(() => {
        console.log("Default Data only one time...");
    }, [])


    return (
        <div>

            <h2>Count: {count}</h2>
            <h2>Result:{result}</h2>
            <h2>Multication: {multiply}</h2>

            <button onClick={e => setCount(count + 1)} className="btn btn-primary">Count</button>
            <button onClick={e => setResult(result * 2)} className="btn btn-primary">Multiply</button>
            <button onClick={e => setMultiply(multiply * 10)} className="btn btn-primary">10 Multication</button>
            <button onClick={e => setMultiply(10)} className="btn btn-primary">Reset Multiply</button>


        </div>
    );
};

export default UseEffect;