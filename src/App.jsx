import { useEffect, useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Header } from './components/Header'
import { ListTodo } from './components/ListTodo'
import { TodoFooter } from './components/TodoFooter'

function App() {
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    if (!localStorage) return;
    let localTodos = localStorage.getItem("todos"); // String
    if (!localTodos) return;
    console.log(localTodos);
    setTodos(JSON.parse(localTodos));
  },[]);

  //console.log(todos);

  return (
    <div>
      <Header />
      <AddTodo todos={todos} setTodos={setTodos} />
      <ListTodo todos={todos} setTodos={setTodos} />
      <TodoFooter size={todos.length} />
    </div>
  )
}

export default App
