import { createContext, useContext } from "react";

export const TodoListContext = createContext({
    todoList: [],
    addTodo: (todo) => {},
    updateTodo: (id, newTodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const TodoListContextProvider = TodoListContext.Provider;

export const useTodoList = () => {
    return useContext(TodoListContext)
}