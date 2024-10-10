
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import TodoItem from './components/TodoItem';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
function App() {

  const [todos,setTodos]=useState<Todo[]>([]);
  const addTodohandler=(todoText:string)=>{
    const newTodo=new Todo(todoText);
  setTodos((prevTodos)=>{
    return prevTodos.concat(newTodo);
  });
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodohandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
