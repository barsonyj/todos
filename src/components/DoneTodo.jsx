import React from 'react'

export const DoneTodo = ({ todoClass, todoId, todos, setTodos }) => {

  const handleClick = () => {
      let updatedTodos = todos.map(obj => {
          if (obj.id == todoId) obj.done = !obj.done;
          return obj; // !!! CSAK ez kerül a tömbbe!
      })
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <div>
      <i className={todoClass + " fa-regular fa-circle-check"} onClick={handleClick}></i>
    </div>
  )
}
