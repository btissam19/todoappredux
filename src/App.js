import React from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
 function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-red-100 rounded-lg shadow-lg">
    <AddTodo />
    <TodoList />
  </div>
  </div>

   
  )
}

export default App