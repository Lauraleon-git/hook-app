import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
const [formState,setFormState]=useState({
  username:'',
  email:'',
  password:'',    
})
//desestructuramos 
const {username,email,password}=formState;
//esto nos permitira cualquier cambio en el input ya q cuando se ingrese un dato se debe redifibujhar 
const onInputChange=({target})=>{
const {name,value}=target;//desestructuramos name y value pra saber donde estamos modificando y el nuevo valor 
setFormState({
  ...formState,
  [name]:value//name va ser el nuevo valor value
})
}
//cada ves q cambie el estado en el simpleform  se esta llamando al useeffect para q se redibuje
//el primer argumento es el callback q se esta es la funcion que se va a disparar cada ves q el 
//se debe de poner una dependencia 



useEffect(()=>{
  // console.log('useeffect called')
},[])//para q el useEfect se dipare una sola ves 

useEffect(()=>{
  // console.log('formState Change!!')
},[formState])


useEffect(()=>{
  // console.log('email change!!')
},[email])

  return (
    <>
    <h1>Formulario Simple</h1>
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
    {(username==='strider2')&&<Message/>}
    </>
  )
}
