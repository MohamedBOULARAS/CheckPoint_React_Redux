import React from 'react'; 
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({todos, toggeleTodo}) => (
    <ul>
        {todos.map(todp => (
            <Todo />
        ))}
    </ul>
);

export default connect()(TodoList);