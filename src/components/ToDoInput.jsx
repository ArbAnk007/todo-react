import saveIcon from "/icons/save-icon.png"
import "../styles/ToDoInput.css"
import {useTodoList} from "../context/TodoListContext"
import { useState } from "react"

function ToDoInput() {
  const { addTodo } = useTodoList();
  const [todo, setTodo] = useState("")

  return (
    <form className="todo-input-container">
        <input type="text" className="todo-input" value={todo} onChange={ (e) => {setTodo(e.target.value)} }/>
        <button type="submit" className="enter-todo-btn" onClick={ (e) => {
          e.preventDefault();
          addTodo({todoValue:todo, id:Date.now(), isCompleted:false});
          setTodo("");
          } }><img src={saveIcon} alt="save-todo" /></button>
    </form>
  );
}

export default ToDoInput;