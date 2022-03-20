import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';

function App() {
  // array with 2 things: todo`s list and function to declare todo`s list
  let [list, setList] = useState([]);
  let [newItem, setNewItem] = useState("")


  useEffect(()=>{
    setList(["ToDo1","ToDo2","ToDo3","ToDo4",])
  }, [])
  

  return (
    <>
    <input value={newItem} onChange={value => setNewItem(value.target.value)} type="text" />
    <button onClick={() => addNewItem()}>Add</button>
    
   <ul>
     {list.map((item,index) => (
       <li>
         {item}
         <button onClick={()=> delItem(index)}>
              Delete
         </button>
         </li>
     ))}
   </ul>
    </>
  );

  function addNewItem(){
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