import styled from "styled-components"

const TaskList = styled.li`
 width: 90%;
 height: 60px;
 margin: 20px auto 0 auto;
 background: #FFFFFF;
 box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
 border-radius: 5px;
 display: flex;
 align-items: center;
 position:reletive;

 &:focus {
  outline: none;
}
`
const TaskInput = styled.input`
width: 55%;
height: 100%;
padding: 0 10px;
font-weight: bold;
color: #4D4D4D;

&:focus {
  outline: none;
}
`

const TaskDone = styled.div`
 width: 25%;
 height: 100%;
 background: #AA93DB;
 display: flex;
 justify-content:center;
 align-items: center;
 color: #FFFFFF;
 transition:all 1.0s;

 &:hover {
  color:#2D2C2C;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
 }
`
const TaskDoneText = styled.p`
 font-weight: bold;
 display: flex;
 cursor: pointer;

`
const DeleteIcon = styled.div`
 height: 100%;
 color:#787878;
 display: flex;
 justify-content:center;
 align-items: center;
 cursor: pointer;
 transition:all 1.0s;

 &:hover {
 color:#2D2C2C;
}
`

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
