import React from 'react'
import { DelTodo } from './DelTodo';
import { DoneTodo } from './DoneTodo';

export const ListTodo = ({ todos, setTodos }) => {
    console.log(todos);
  return (
    <div className="listtodo">
      {todos.map(obj =>
          <div key={obj.id} className="item">
              <DoneTodo todoClass={obj.done ? "done" : ""} todoId={obj.id} todos={todos} setTodos={setTodos} />
              <div className={obj.done ? "itemdone" : ""}>{obj.descr}</div>
              <DelTodo todoId={obj.id} todos={todos} setTodos={setTodos} />
          </div>
      )}
    </div>
  )
}
