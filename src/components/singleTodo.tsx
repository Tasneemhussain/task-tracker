import React, { useState } from "react";
import { Todo } from "../model";
import { FaCheck, FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";
import "../styles.css";

type props = {
  todo: Todo;
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, Todos, setTodos }: props) => {
  const [edit, SetEdit] = useState<boolean>(false);
  const [editTodo, SetEditTodo] = useState<string>(todo.todo);

  //  function for the  task done button
  const handleDone = (id: number) => {
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  //  function for the task delete button

  const handleDelete = (id: number) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  // function for handle edit

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      Todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    SetEdit(false);
  };

  return (
    <form className="todos-single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input value={editTodo} onChange={(e) => SetEditTodo(e.target.value)} />
      ) : todo.isDone ? (
        <s className="todos-text">{todo.todo}</s>
      ) : (
        <span className="todos-text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icons"
          onClick={() => {
            if (!edit && !todo.isDone) {
              SetEdit(!edit);
            }
          }}
        >
          <FaPenToSquare />
        </span>

        <span className="icons" onClick={() => handleDelete(todo.id)}>
          <FaRegTrashCan />
        </span>

        <span className="icons" onClick={() => handleDone(todo.id)}>
          <FaCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
