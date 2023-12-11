import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAsync } from '../features/todoSlice';
function AddTodo() {
    const [input ,setInput]=useState('');
    const dispatch=useDispatch();
    const handalSubmit=(e)=>{
        e.preventDefault();
		if (input) {
			dispatch(
				addTodoAsync({
					text: input,
				})
			);
		}
    }
  return (
    <div>
      
            <h4 className="text-center text-2xl font-semibold text-gray-500 mt-8 mb-6">To-Do-List</h4>

            <form className="task-form" onSubmit={handalSubmit}>
                <div className="mb-6 form-control">
                    <input type="text" name="input" value={input} onChange={(e) => setInput(e.target.value)} className="task-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Assist the meeting" required />
                </div>

                <div className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white text-center py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">
                    <button type="submit" className="bg-transparent btn submit-btn border-none cursor-pointer outline-none">submit</button>
                </div>

                <div className="form-alert text-red-dark text-center mb-4"></div>
            </form>
        </div>
  )
}

export default AddTodo
