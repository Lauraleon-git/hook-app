import { useState } from "react";



export const useForm = (initialForm={}) => {
  
  const [formState,setFormState]=useState(initialForm)
 
  //esto nos permitira cualquier cambio en el input ya q cuando se ingrese un dato se debe redifibujhar 
  const onInputChange=({target})=>{
  const {name,value}=target;//desestructuramos name y value pra saber donde estamos modificando y el nuevo valor 
  setFormState({
    ...formState,
    [name]:value//name va ser el nuevo valor value
  })
  }
  const onResetForm=()=>{
  setFormState(initialForm)
  }
  
  
  return{
    ...formState,
    formState,
    onInputChange,onResetForm

  } 
}
