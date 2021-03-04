import React from 'react';
import EMPLOYEES from '../data';
import Employee from './Employee';

const Employees = (props) => {

    let employees = EMPLOYEES;

    function renderEmployee() {
        return employees.map((emp, idx) => {
            return (

                <Employee emp={emp} />
            )
        })
    }


    return (


        <table className="table">
            <tbody>
                {renderEmployee()}

            </tbody>
        </table>




    );
};

export default Employees;