import { useRef } from "react";
import classes from "./NewTodo.module.css";


const NewTodo: React.FC<{onAddTodo:(text:string)=>void}>=(props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if(enteredText.trim().length===0){
      return;
    }

   props.onAddTodo(enteredText);

  };
  return (
    <form action="" onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
