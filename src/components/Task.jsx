import { useState } from "react";
import { TaskList,TaskInput} from "../css/task";
import { Delete } from "./task-components/TaskDelete";
import { TaskComplete } from "./task-components/TaskDone";


export const Task = (props) => {
  const { taskText,taskList,id,setTaskList,showList} = props;
  const [taskDone, setTaskDone] = useState(false);

  const onChangeTaskInput = () => {
    console.log('change task input');
  }

  return (
   <>
   <div className="container" style={showList ? {} : {display: 'none'}}>
     <TaskList style={taskDone ? {backgroundColor:"#BDBDBD",boxShadow:'none'}: {backgroundColor:"#FFFF"}}>
     <TaskInput 
      className="sm:text-lg text-sm" 
      type='text' 
      value={taskText}
      onChange={onChangeTaskInput}
      style={taskDone ? {backgroundColor:"#BDBDBD",color:'#787878'}: {backgroundColor:"#FFFF"}} 
      />


     <TaskComplete
      taskDone={taskDone}
      setTaskDone={setTaskDone}
     />

     <Delete
      taskList={taskList}
      id={id}
      setTaskList={setTaskList}
      />

    </TaskList>
  </div>
   
   </>
  )
}
