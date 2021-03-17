import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {useTodoStore} from '../redux/store'
const AddTodo = () => {
    
    const {addTodo}=useTodoStore();
    const inputE1 = React.useRef();
    const todos =useSelector(state=>state.todos);
   
    const dispatch=useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
      
        const target = inputE1.current;
        if(!target.value.trim()){
         
            return;
        }
         

        addTodo(target.value);
        target.value="";

       // dispatch(addTodo(target.value));
    
    }


    return (


        <div>
            <form onSubmit={onSubmit}>
                <input type="text" ref={inputE1} />
                <button>Add Todo</button>
            </form>

        </div>
    );
};

export default AddTodo;