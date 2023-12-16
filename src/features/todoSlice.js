import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const initialState={
    todos:[]
}
export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch('http://localhost:4000/getAllTasks');
		if (resp.ok) {
			const todos = await resp.json();
			return { todos };
		}
	}
);

export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:4000/addTask', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ text: payload.text }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

export const toggleCompleteAsync = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:4000/updatetask/${payload.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: payload.completed }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync',
    async (payload) => {
      const resp = await fetch(`http://localhost:4000/deleteTask/${payload.id}`, {
        method: 'DELETE',
      });
  
      if (resp.ok) {
        return { id: payload.id };
      }
    }
  );
  export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
      addTodo: (state, action) => {
        const todo = {
          id: nanoid(),
          text: action.payload.text,
          completed: false,
        };
        state.todos = [...state.todos, todo];
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      },
      toggleComplete: (state, action) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        state.todos[index].completed = action.payload.completed;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getTodosAsync.fulfilled, (state, action) => {
          state.todos = action.payload.todos;  // Update the todos array
        })
        .addCase(addTodoAsync.fulfilled, (state, action) => {
          state.todos = [...state.todos, action.payload.todo];  // Correct way to add a new todo
        })
        .addCase(deleteTodoAsync.fulfilled, (state, action) => {
          state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        })
        .addCase(toggleCompleteAsync.fulfilled, (state, action) => {
          const index = state.todos.findIndex(
            (todo) => todo.id === action.payload.todo.id
          );
          
          if (index !== -1) {
            state.todos[index].completed = action.payload.todo.completed;
          }
        });
    },
  });
  

export const {addTodo,removeTodo,toggleComplete}=todoSlice.actions;
export default todoSlice.reducer;