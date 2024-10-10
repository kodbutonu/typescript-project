import React from 'react'
import classes from './Todos.module.css';

const TodoItem:React.FC<{text:string}>=(props)=>{
    return<li key={props.text} className={classes.item}></li>
}

export default TodoItem;