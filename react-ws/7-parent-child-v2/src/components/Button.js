import { useState } from 'react';

const Button = (props) => {

    const [count, setCount] = useState(0)

    function btnHitCount() {
        console.log(">>>> Button Component:: btnHitCount ");
        setCount(count + 1);
        // Now Call Back Function of a Parent which is bunded to a property 
        let { onAction } = props; 

        onAction(props.btnLabel); // Invokes Parent component Function which is assigned to abc property name
    }

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => btnHitCount()}
            >
                {props.btnLabel}
            </button>
            <hr />
            <span className="text-center">
                <h6>{count}</h6>
            </span>
        </div>
    );
};

export default Button;