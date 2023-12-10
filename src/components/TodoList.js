import React from 'react';
import { useSelector } from 'react-redux';

import TodoItsms from './TodoItem';
const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul className='list-group'>
    {todos.map((todo) => (
      <TodoItsms id={todo.id} title={todo.text} completed={todo.completed} />
    ))}
  </ul>
 
  );
};

export default TodoList;
