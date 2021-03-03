import React from 'react';

const Employee = (props) => {

    /*
    function getReadyToCallParent() {
        console.log("Employee Component:: getReadyToCallParent");
        // invoke parents function
        let { onAction } = props;

        onAction('Hey Parent1 .. Good Morning...'); // Action
        onAction('Hey Parent2 .. Good Morning...'); // Action
        onAction('Hey Parent3 .. Good Morning...'); // Action

     //  props.onAction('Test it...');
      // props.onAction('Its Working');
       //props.onAction('I feel it is lengthy');
    }

    */


    let { emp } = props;

    function renderEmployee() {

        return (
            <tr>
                <td>{emp.id}</td>
                <td>{emp.first_name}</td>
                <td>{emp.last_name}</td>
                <td>{emp.email}</td>
                <td>{emp.gender}</td>
            </tr>




        )

    }


    return (


        <tbody>
            { renderEmployee()}
        </tbody>




    );
};

export default Employee;