import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <div className="container">

      <h1>Redux Demo</h1><hr/>

      <hr/>

      <AddTodo/>

      <TodoList/>

        

      
    </div>
  );
};

export default App;