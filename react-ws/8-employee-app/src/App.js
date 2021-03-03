import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Employee from './components/Employee';
import Employees from './components/Employees';

const App = () => {


  function sayHello(data){
    console.log("APP Component:: sayHello");
    console.log(data);
  }


  return (
    <div className="container">
      <h1>Employee APP</h1> <hr/>

      <Employees/>
      
    </div>
  );
};

export default App;