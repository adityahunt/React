import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, title: "Todo msg", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (todoId, newTodo) => {},
  deleteTodo: (todoId) => {},
  toggleComplete: (todoId) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
