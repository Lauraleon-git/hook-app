import { useContext } from "react";
import { UserContext } from "./context/UserContex"

export const LoginPage = () => {

  
  const algo=useContext(UserContext);
  console.log(algo);
  return (
    <>
    <h1>LoginPage</h1>
    <hr />
    </>
  )
}
