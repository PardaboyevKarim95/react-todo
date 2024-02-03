import React from "react"
import {Todos} from "./companents/Todo"
import './index.css'

function App() {
  let [todo, settodo] = React.useState([
    {
      id:1,
      text: "fudbo'l o'ynash",
      isCompleted: false
    },
    {
      id:2,
      text: "Kitob o'qish",
      isCompleted: true
    },
    {
      id:3,
      text: "nimadir...",
      isCompleted: false
    }
  ]);
  
  const submit = (evt) => {
    evt.preventDefault()
    
    const inpValue = evt.target[0].value;
    evt.target[0].value = ""
    if(inpValue) {
      settodo([...todo, {
        id: todo.length ? todo.at(-1).id + 1 : 1,
        text: inpValue,
        isCompleted: false,
      }])
    }
    
    
  }
  return (
    <>
    <div className='flex flex-col items-center w-3/6 p-4 ml-auto mr-auto border rounded-sm bg-slate-600 border-spacing-7'>
    <h1 className='mb-2 text-xl font-bold text-center text-white '>Todo</h1>
    
    <form onSubmit={submit} className='flex w-4/5 '>
    <input className='w-full bg-black p-2 border border-white text-stone-50 focus:bg-white focus:text-black' placeholder="Todo create" type="text" />
    <button type="submit" className='w-1/5 ml-4 text-white bg-black border border-spacing-1'>Add</button>
    </form>
    
    </div>
    {todo.length ? (
      <ul className='w-3/6 p-4 mt-5 ml-auto mr-auto border bg-slate-400 border-spacing-11'>
      {todo.map((item) => (
        <Todos key={item.id} id={item.id} text={item.text} isCompleted={item.isCompleted} todo={todo} settodo={settodo}/>
        ))}
        </ul>) : (<h2>todosla mavjut emas</h2>)};
        
        
        </>  
        )
      }
      
      export default App
      