
import {TaskDone,TaskDoneText,TaskDoneMessage} from "../../css/task";

// タスクを完了を押した時の挙動
export const TaskComplete = (props) => {

  const { taskDone,setTaskDone} = props;

  const onClickDone = () => {
    setTaskDone(true);
    if(taskDone === true) {
      setTaskDone(false)
    }
  }

  return(
    <TaskDone style={taskDone ? {backgroundColor:'#BDBDBD'}: {}}>
      <TaskDoneMessage style={taskDone ? {display:'block'}: {display:'none'}}>NICE!</TaskDoneMessage>
       <TaskDoneText 
        className="sm:text-lg text-sm" 
        onClick={() => onClickDone()} 
        style={taskDone ? {color:'#787878'} :{color:'#FFFF'}}
        >
        {taskDone ? 'BACK' :'DONE'}
        </TaskDoneText>
     </TaskDone>
  )
}

