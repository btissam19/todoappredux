import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo,toggleComplete } from '../features/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash} from '@fortawesome/free-solid-svg-icons';

const TodoItsms=({id,title,completed})=>{
    const dispatch=useDispatch();

const handleCheckboxClick=()=>{
      dispatch(toggleComplete({id:id,completed:!completed}))
}
const handleDeleteClick=()=>{
     dispatch(removeTodo({id:id}))
}
    
return (
<li className={`flex justify-between items-center mb-4 bg-gray-50 p-3 rounded-lg ${completed ? 'list-group-item-success' : ''}`}>
    <div className='flex items-center w-full'>
        <span className='flex items-center w-full'>
            <input
                type='checkbox'
                className={`mr-3 ${completed ? 'text-blue-500' : ''}`}
                checked={completed}
                onChange={handleCheckboxClick}
            />
            <p className={`text-dark ${completed ? 'line-through' : ''}`}>
                {title}
            </p>
        </span>
        <div className="task-links flex items-center gap-3 ml-auto">
            <button onClick={handleDeleteClick} className="delete-btn text-red-600">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    </div>
</li>

)

}
export default TodoItsms;