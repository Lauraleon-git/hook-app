import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomhook } from './02-useEffect/FormWithCustomhook.jsx';
import './index.css'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx';
// import { FocusScreen } from './05-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    <Layout/>
  //</React.StrictMode>,
)
