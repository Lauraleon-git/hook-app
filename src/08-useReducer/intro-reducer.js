const initialState=[{
    id:1,
    todo:'Recolectar la piedra del alma',
    done:false,

}];

//un reducer es una funcion pura q regresa un state 
const todoReducer=(state=initialState,action={})=>{

    if(action.type==='[TODO] add todo'){
        return [...state,action.payload];
    }

return state;
}

const newTodo={
        id:2,
        todo:"Aprender a programar",
        
    }
    const addTodoAction={
        type:'[TODO] add todo',
        payload:newTodo,
    }
    todos=todoReducer(todos,addTodoAction);

    console.log({state:todos});