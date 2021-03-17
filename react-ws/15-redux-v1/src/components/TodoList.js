import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {

    const todos = useSelector(state => state.todos);

    const renderTodos = () => {
        return todos.map(todo => {
            return (
                <div>{todo.id} - {todo.text}</div>
            )
        })
    }
    return (
        <div>

            {renderTodos()}

        </div>
    );
};

export default TodoList;