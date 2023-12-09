import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash, faCircle } from '@fortawesome/free-solid-svg-icons';
import { removeTodo } from '../features/todoSlice';
import { useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch=useDispatch();

  return (
    <ul>
      {todos.map((task) => (
        <li key={task.id} className="flex justify-between items-center mb-4 bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCircle} className="text-cyan-500" />
            <h5 className="ml-2 text-dark">{task.text}</h5>
          </div>
          <div className="task-links flex items-center gap-3">
            <button type="button" onClick={()=>{dispatch(removeTodo(task.id))}} className="delete-btn text-red-600">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
