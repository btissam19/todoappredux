import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
 const ListPage =()=> {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-red-100 rounded-lg shadow-lg">
    <AddTodo />
    <TodoList />
  </div>
  </div>
  )
}

export default ListPage