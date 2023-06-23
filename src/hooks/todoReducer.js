

export const todoReducer = (initialState=[],action) => {//se dispara la accion 
 switch(action.type){
//esa accion va tener el todo
    case '[TODO] add todo':
    return[...initialState,action.payload];

    case '[TODO] Remove Todo':
    return initialState.filter(todo=>todo.id !== action.payload);

    case '[TODO] Toggle Todo':
        return initialState.map(todo=>{
            if(todo.id ===  action.payload ){
                return{
                    ...todo,
                    done:!todo.done
                }
            }
            return todo

        })
        default:
            return initialState;
 }
}
