import { useState } from "react";
import { useTodoList } from "../context/TodoListContext";
import "../styles/ToDoItems.css"
import deleteIcon from "/icons/delete-icon.png"
import editIcon from "/icons/edit-icon.png"
import saveIcon from "/icons/save-icon.png"

function ToDoItems( {todo} ) {

const { updateTodo, deleteTodo, toggleComplete } = useTodoList();
const [isEditable, setIsEditable] = useState(false);
const [newTodoMsg, setNewTodoMsg] = useState(todo.todoValue);

const editTodo = () => {
  updateTodo(todo.id, newTodoMsg);
  setIsEditable(false);
}

return ( 
    <div className="todo" key={todo.id} id={todo.id}>
      <input type="checkbox" className="completed-checkbox" checked={todo.isCompleted} onChange={ () => {toggleComplete(todo.id)} } />
      <input type="text" value={newTodoMsg} disabled={!isEditable} className={`todo-display ${todo.isCompleted ? "completed" : ""}`} onChange={ (e) => {setNewTodoMsg(e.target.value)} } />
      <div className="functionality-container">
        <img src={`${isEditable ? saveIcon : editIcon}`} alt="edit icon" onClick={ () => {
          if(todo.isCompleted && !isEditable) return

          if(isEditable){
            editTodo();
            setIsEditable(false);
          }else{
            setIsEditable(true)
          }
        } } />
        <img src={deleteIcon} alt="delet icon" onClick={ () => { deleteTodo(todo.id) } } />
      </div>
    </div>
 );
}

export default ToDoItems;