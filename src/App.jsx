import './styles/App.css'
import { ToDoInput, ToDoItems } from './components'
import { TodoListContextProvider } from './context/TodoListContext'
import { useEffect, useState } from 'react'

function App() {

  const savedTodo = JSON.parse(localStorage.getItem("todoList"));

  const [todoList, setTodoList] = useState(savedTodo || []);

  useEffect( () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList] )

  const addTodo = (todo) => {
    setTodoList( (prevTodoList) => [todo,...prevTodoList] );
  }

  const updateTodo = (id, newTodo) => {
    setTodoList( (prevTodoList) => prevTodoList.map( (prevTodo) => (prevTodo.id===id ? {...prevTodo, todoValue:newTodo} : prevTodo) ) );
  }

  const toggleComplete = (id) => {
    setTodoList( (prevTodoList) => prevTodoList.map( (prevTodo) => (prevTodo.id===id ? {...prevTodo, isCompleted: !prevTodo.isCompleted} : prevTodo) ) );
  }

  const deleteTodo = (id) => {
    setTodoList( (prevTodoList) => prevTodoList.filter( (prevTodo) => (prevTodo.id!==id) ) );
  }

  return (
    <TodoListContextProvider value={{addTodo, todoList, updateTodo, toggleComplete, deleteTodo}}>
      <h1 className='heading'>Manage Your Todo</h1>
      <ToDoInput />
      <div className='todo-container'>
        {todoList.map( (todo) => {
          return <ToDoItems todo={todo} key={todo.id} />
        } )}
      </div>
    </TodoListContextProvider>
  )
}

export default App