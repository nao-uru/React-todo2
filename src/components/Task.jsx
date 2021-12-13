import { TaskList } from "../css";
import { TaskInput } from "../css";
import { TaskDone } from "../css";
import { TaskDoneText } from "../css";
import { DeleteIcon } from "../css";

export const Task = (props) => {
  const { taskText,taskList,id,setTaskList,showList} = props;

  
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
    console.log('');
  }



  return (
   <>
   <TaskList style={showList === true ? {} : {display: 'none'}}>
     <TaskInput className="sm:text-lg text-sm" type='text' value={taskText} onChange={onChangeTaskInput}></TaskInput>

     <TaskDone>
       <TaskDoneText className="sm:text-lg text-sm" onClick={onClickDone}>DONE</TaskDoneText>
     </TaskDone>

     <DeleteIcon className="sm:text-xl text-lg sm:ml-3 ml-6" onClick={onClickDelete}>
     <i className="sm:text-2xl text-xl fas fa-backspace"></i>
     </DeleteIcon>

   </TaskList>
   </>
  )
}
