import { useEffect} from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomhook = () => {

  const {formState,onInputChange,username,email,password,onResetForm}= useForm({//otra forma de desestructurar crear en useform ...formState
    username:'',
    email:'',
    password:'',
  });

  // const{username,email,password}=formState;//esta seria una forma donde se tendria desestructurado 


 

  return (
    <>
    <h1>Formulario con custom hook</h1>
    <hr />
    <input 
    type="text"
    className="form-control"
    placeholder="Username"
    name="username"
    value={username}
    onChange={onInputChange}
    />
    <input 
    type="email"
    className="form-control mt-2"
    placeholder="laura@gmail.com"
    name="email"
    value={email}
    onChange={onInputChange}
    />
      <input 
    type="password"
    className="form-control mt-2"
    placeholder="Contraseña"
    name="password"
    value={password}
    onChange={onInputChange}
    />

<button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}
