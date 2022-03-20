import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import '../src/App.css'

function App() {
  // array with 2 things: todo`s list and function to declare todo`s list
  let [list, setList] = useState([]);
  let [newItem, setNewItem] = useState("")


  useEffect(()=>{
    setList(["ToDo1","ToDo2","ToDo3","ToDo4",])
  }, [])
  

  return (
    <div className='container'>
    <>
    <div className="new-item">
      <input value={newItem} onChange={value => setNewItem(value.target.value)} type="text" placeholder='ToDo`s' />
    <button onClick={() => addNewItem()}>Add</button>
    </div>
    
   <ul className='todo-list'>
     {list.map((item,index) => (
       <li key={index} className='todo-item'>
         {item}
         <button onClick={()=> delItem(index)}>
              Delete
         </button>
         </li>
     ))}
   </ul>
    </>
    </div>
  );

  function addNewItem(){
    if(newItem.length <=0){
      alert("Please add something to the ToDo`s List!!")
      return;
    }

    let itemIndex = list.indexOf(newItem);
    if(itemIndex >= 0){
      alert("It`s already exists!!")
      return;
    }
    setList([...list, newItem]);
    setNewItem("")
  }

  function delItem(index){
    let tempArray =[...list];
    tempArray.splice(index, 1)

    setList(tempArray)

  }
  
}

export default App;