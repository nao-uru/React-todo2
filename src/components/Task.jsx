import { useState } from "react";
import { TaskList,TaskInput,TaskDone,TaskDoneText,DeleteIcon } from "../css/task";

export const Task = (props) => {
  const { taskText,taskList,id,setTaskList,showList} = props;
  
  const [taskDone, setTaskDone] = useState(false);

  const onChangeTaskInput = () => {
    console.log('change task input');
  }

  const onClickDelete = () => {
    const deleteTask = [...taskList];
    
    const delateOK = window.confirm('todoを削除してもいいですか？');
    if(delateOK === true) {
      deleteTask.splice(id,1);
      setTaskList(deleteTask);
    }
  }

  const onClickDone = () => {
    setTaskDone(true);
    if(taskDone === true) {
      setTaskDone(false)
    }
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

     <TaskDone style={taskDone ? {backgroundColor:'#BDBDBD'}: {}}>
       <TaskDoneText 
        className="sm:text-lg text-sm" 
        onClick={() => onClickDone()} 
        style={taskDone ? {color:'#787878'} :{color:'#FFFF'}}
        >
        {taskDone ? 'BACK' :'DONE'}
        </TaskDoneText>
     </TaskDone>

     <DeleteIcon className="sm:text-xl text-lg sm:ml-3 ml-6" onClick={onClickDelete}>
     <i className="sm:text-2xl text-xl fas fa-backspace"></i>
     </DeleteIcon>

    </TaskList>
  </div>
   
   </>
  )
}

// ,taskDone === true ? {backgroundColor:"#AA93DB"}: {backgroundColor:"#FFFF"}
// style={taskDone === true ? {backgroundColor:"#AA93DB"}: {backgroundColor:"#FFFF"}} 