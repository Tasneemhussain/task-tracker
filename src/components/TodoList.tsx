import React from "react";
import { Todo } from "../model";
import SingleTodo from "./singleTodo";
import "../styles.css";

interface props {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ Todos, setTodos }) => {
  return (
    <div className="todos">
      {Todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          Todos={Todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
