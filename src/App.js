import { useState } from 'react';
import './App.css';

function App() {
  const[value,setValue] = useState("");
  const[taskList,setTask] = useState([]);
  const[taskNumber,setTaskNumber] = useState(0);

  const new_task = (to_append) =>{
      setValue(to_append.target.value)
  }
  const append = ()=>{
    const data = {
      id:taskNumber,
      task:value
    }
    setTaskNumber(taskNumber+1);
    setTask((old_list)=>[...old_list,data])
    setValue("")
  }

  const deleteTask = (task_id) =>{
     
     setTask(taskList.filter((item)=> item.id !== task_id))
   
  }

  return (
    <div className="App">
      <div className='addTask'>
     <input placeholder='Task!' onChange={new_task} value={value}/>
     <button onClick={append}>Add Task</button>
     </div>
     <div className='list'>
      {taskList.map((item)=>{ return <div><h1>{item.id}. {item.task}<button onClick={()=>{deleteTask(item.id)}}>x</button></h1> </div> } ) }
     </div>
    </div>
  );
}

export default App;
