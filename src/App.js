import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'


function App() {
  //showAddTask-  by default i am hidding add task form
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'feb 2nd 2022',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting',
        day: 'feb 3nd 2022',
        reminder: true
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'feb 4nd 2022',
        reminder: false
    }
])


//delete reminder
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>
    task.id !== id
  ))
}
//toggle remainder
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>
    task.id === id ? {...task,reminder:!task.reminder}:task
  ))
}
//add task
const addTask=(task)=>{
  const id =Math.floor(Math.random()*10000)+1
  const newTask={id, ...task}
  setTasks([...tasks,newTask])
}
const state={
  curDT : new Date().toLocaleString(),
}


  return (
    <div className="container">
     <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}></Header>
     {showAddTask &&<AddTask onAdd={addTask}></AddTask>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 
     'There are no tasks to show, please add tasks using add button above'}
    </div>
  );
}

export default App;
