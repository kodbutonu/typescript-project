import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className="classes.todos">
      {props.items.map((item) => (
        <li key={item.id}>
            <TodoItem key={item.id} text={item.text}/>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
