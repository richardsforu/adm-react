import React from 'react';

const Greet = (props) => {

    console.log(">>>> Greet Component");

    return (
        <div>
            <div className="card">
                <div className="card-header">Greet Component</div>
                <div className="card-body">
                    <h2>Greet Component</h2>
                    <hr />
                    <h2>{props.greetMsg}</h2>
                </div>
            </div>
        </div>
    );
};

export default Greet;