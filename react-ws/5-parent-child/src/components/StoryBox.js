import React from 'react';
import Greet from './Greet';

const StoryBox = (props) => {
    return (
        <div>
              <div className="card">
                <div className="card-header">StoryBox Component</div>
                <div className="card-body">
                    <h1>StoryBox Component</h1>
                    <hr/>
                    <h2>My Book Title: {props.storyTitle}</h2>

                    <Greet greetMsg='Good Morning'/>
                    <Greet greetMsg='Good Aftdernoon'/>
                    <Greet greetMsg='Good Evening'/>
                    <Greet greetMsg='Take Rest'/>


                </div>
            </div>
            
        </div>
    );
};

export default StoryBox;