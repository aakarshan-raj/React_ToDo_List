import { useState } from 'react';
import './App.css';
import {Showlist} from "./components/List.js"

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
      task:value,
      isGreen:false
    }
    setTaskNumber(taskNumber+1);
    setTask((old_list)=>[...old_list,data])
    setValue("")
  }

  const deleteTask = (task_id) =>{
     
     setTask(taskList.filter((item)=> item.id !== task_id))
   
  }

  const completeTask = (id) => {
    console.log(2222222222)
     setTask( taskList.map((item)=>{
 
         if(id === item.id){
          return {...item,isGreen:!item.isGreen };
         }
         else{
          return item;
         }

     }) );
  };
  
  return (
    <div className="App">
      <div className='addTask'>
     <input placeholder='Task!' onChange={new_task} value={value}/>
     <button onClick={append}>Add Task</button>
     </div>
     <div className='list'>
      {taskList.map((item)=>{ return(<Showlist isGreen={item.isGreen} id = {item.id} task={item.task} delete_function={deleteTask} complete_function={completeTask}/>);} ) }
     </div>
    </div>
  );
}

export default App;


