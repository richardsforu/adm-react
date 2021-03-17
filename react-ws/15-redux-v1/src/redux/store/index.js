import {useDispatch,useSelector} from "react-redux"
import {useCallback} from "react"
import {addTodo} from '../actions'
export const useTodoStore=()=>{

const dispatch=useDispatch();
//const todos=useSelector(state=>state.todos);

const _addTodo=useCallback(text=>dispatch(addTodo(text)),[dispatch]);

    return{
        addTodo:_addTodo
    }

}


