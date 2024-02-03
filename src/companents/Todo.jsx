import React from "react"


export const Todos = ({id,text,isCompleted,todo,settodo}) => {
  
  function funcEdit(id) {
    let edit = todo.find(item => item.id == id)
    let value = prompt("O'zgartiring",edit.text)
    edit.text = value == undefined ? edit.text: value;
    settodo([...todo]);
  }

  function funcDelete() {
let deleted = todo.findIndex((item => item.id == id))
todo.splice(deleted,1)
 settodo([...todo])
  }
  return (
    <li className='flex justify-between mb-4 w-full p-3 rounded-lg bg-slate-300'>
    
    <input defaultChecked={isCompleted} className='w-5' type="checkbox" />
    <strong className=''>{text}</strong>
    <div className='flex justify-between w-3/8'>
    <button id={id} onClick={(evt) => funcEdit(evt.target.id)}  className='block w-2/5 pl-4 pr-4 mr-4 border border-white bg-amber-300 '>edit</button>
    <button id={id} onClick={(evt) => funcDelete(evt.target.id)} className='block w-3/5 pl-4 pr-4 text-white bg-orange-700 border border-white'>delete</button>
    </div>
    </li>)
    
  }