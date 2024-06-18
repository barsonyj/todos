import React, { useEffect, useRef, useState } from 'react'
import { v4 } from 'uuid'

export const AddTodo = ({ todos, setTodos }) => {
    //const [ descrTodo, setDescrTodo ] = useState("");
    //console.log(v4());
    //console.log(descrTodo);

    const inputRef = useRef({});

    useEffect(() => {
        inputRef.current.focus();
    },[]);

    const handleAdd = (e) => {
        //console.log("add");
        //if (!descrTodo) return;
        if (!inputRef.current.value) return;
        //let newTodo = { id:v4(), descr:descrTodo, done:false };
        let newTodo = { id:v4(), descr:inputRef.current.value, done:false };
        //console.log(newTodo);
        let newTodos = [...todos, newTodo];  // [ ] !!!
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos))
        inputRef.current.value="";
        console.log(inputRef);
    }

  const handleDelete = (e) => {
      setTodos([]);
      localStorage.removeItem("todos");
  }

  //console.log("AddTodo render...");

  return (
    <div className="addtodo">
      <form>
          {/*<input type="text" placeholder="Írd be az új teendőt" value={descrTodo} onChange={(e) => setDescrTodo(e.target.value)} />*/}
          <input type="text" placeholder="Írd be az új teendőt" ref={inputRef} />
          <span className="fa-regular fa-x" onClick={() => setDescrTodo("")}></span>
          <span className="gomb fa-regular fa-square-plus fa-2x" onClick={handleAdd}></span>
          <span className="gomb fa-solid fa-trash-can fa-2x" onClick={handleDelete}></span>
      </form>
    </div>
  )
}
