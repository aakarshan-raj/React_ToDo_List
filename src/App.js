import { useState } from 'react';
import './App.css';

function App() {
  const[value,setValue] = useState("");
  const[taskList,setTask] = useState([]);

  const new_task = (to_append) =>{
      setValue(to_append.target.value)
  }
  const append = ()=>{
    setTask((old_list)=>[...old_list,value])
  }

  return (
    <div className="App">
     <input placeholder='Task!' onChange={new_task}></input> <button onClick={append}>Add</button>
     <div>
      {taskList.map((item)=>{ return <h1>{item}</h1> } ) }
     </div>
    </div>
  );
}

export default App;
