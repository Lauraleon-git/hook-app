import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomhook } from './02-useEffect/FormWithCustomhook.jsx';
import './index.css'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx';
// import { FocusScreen } from './05-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 {/* // <React.StrictMode> */}
    <MainApp/>
  {/* //</React.StrictMode>, */}
  </BrowserRouter>
)
