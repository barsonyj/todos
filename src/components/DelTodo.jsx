import React from 'react'

export const DelTodo = ({ todoId, todos, setTodos }) => {
  const handleDelete = () => {
      let updatedTodos = todos.filter(obj => obj.id != todoId);
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  return (
    <div>
      <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
    </div>
  )
}
