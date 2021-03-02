import React from 'react';
import StoryBox from './StoryBox';

const Greet = (props) => {
    let greetMsg = props.greetMsg;
    // greetMsg=greetMsg.concat(" My Text")
    return (
        <div>
            <div className="card">
                <div className="card-header">Greet Component</div>
                <div className="card-body">
                    <h1>Greet Component</h1>
                    <hr />

                    <h2>Hello, {greetMsg}</h2>
                </div>
            </div>

        </div>
    );
};

export default Greet;