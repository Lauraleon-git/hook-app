import { UserContext } from "./UserContex"



export const UserPovider = ({children }) => {
  return (
    <UserContext.Provider value={{Hola:'Mundo'}} >
        { children }
    </UserContext.Provider> 
    
    )
}
