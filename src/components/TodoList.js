import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync} from '../features/todoSlice';
import { useEffect } from 'react';

import TodoItsms from './TodoItem';
const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

  if (!todos) {
      return <p>Loading...</p>; // or any other loading indication
  }

  return (
      <ul className='list-group'>
          {todos.map((todo) => (
              <TodoItsms key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
          ))}
      </ul>
  );
};

export default TodoList;

