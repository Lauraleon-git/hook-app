
import { useEffect, useReducer } from "react"
import { todoReducer } from "../hooks/todoReducer"

export const useTodo = () => {


  const init =()=>{
    return JSON.parse(localStorage.getItem('todos'))|| []  //
  }


    const [todos, dispatch]=useReducer(todoReducer,[],init)//el todoreducer no lo ejecutamos slo pasamos la referencia a la funcion

    useEffect (()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    const handleNewTodo=(todo)=>{
    console.log(todo);
    const action={
      type:'[TODO] add todo',
      payload:todo
    }
    dispatch(action);
    }


    const handleDeleteTodo=(id)=>{
      dispatch({
        type:'[TODO] Remove Todo',
        payload:id
      });
    }
    const handleToggleTodo=(id)=>{
      dispatch({
        type:'[TODO] Toggle Todo',
        payload:id
      });
    }

    

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCounter:todos.length,
    PendingTodosCount:todos.filter(todo=>!todo.done).length,
  }
}
