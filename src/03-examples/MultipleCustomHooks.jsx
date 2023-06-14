import { useCounter ,useFetch} from "../hooks";
import { LoadingQuote,Quote } from "./";

export const MultipleCustomHooks = () => {

  const {counter,increment}=useCounter(1)

  const{ data,isLoading,hasError}=useFetch(`https://api.breakingbadquotes.xyz/V1/quotes/${counter}`);

 // console.log(data,isLoading,hasError);
  const {author,quote}= !!data && data[0];
  

  return (

    <>
    <h1>BreakingBad Quotes </h1>
    <hr />
    
    {/* {
      isLoading    //esto es un ternario solo se utiliza cuando son pocas lineas de codigo 
      ? (
      <div className="alert alert-info text-center">
      loading...
      </div>

      )
      : (
      <blockquote className="blockquote text-end">
      <p className="mb-1"> {quote}</p>
      <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      )
    } */}
    {
      isLoading
      ?<LoadingQuote/>
      :<Quote author={author} quote={quote}/>
    } 
    <button 
    className="btn btn-primary"
    disabled={isLoading}
     onClick={()=>increment()}>
      Next quote
      </button>
    </>
  )
  }
