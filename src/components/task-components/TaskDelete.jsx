import { DeleteIcon } from "../../css/task";


// タスク削除、タスク削除時の挙動
export const Delete = (props) => {

  const { taskList,id,setTaskList} = props;


  const onClickDelete = () => {
    const deleteTask = [...taskList];
    
    const delateOK = window.confirm('todoを削除してもいいですか？');
    if(delateOK === true) {
      deleteTask.splice(id,1);
      setTaskList(deleteTask);
    }
  }

  return (
  
    <DeleteIcon onClick={onClickDelete} className="sm:text-xl text-lg sm:ml-3 ml-6" >
     <i className="sm:text-2xl text-xl fas fa-backspace"></i>
     </DeleteIcon>
  )

}

