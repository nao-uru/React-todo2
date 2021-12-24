import { useState } from "react";
import { Modal } from "./Modal";
import { DeleteIcon } from "../../css/task";


// タスク削除、タスク削除時の挙動
export const Delete = (props) => {

  const { taskList,id,setTaskList} = props;

  const [showModal, setShowModal] = useState(false);


  const onClickDelete = () => {
    const deleteTask = [...taskList];
    
    // const delateOK = window.confirm('todoを削除してもいいですか？');
    // if(delateOK === true) {
    //   deleteTask.splice(id,1);
    //   setTaskList(deleteTask);
    // }

      deleteTask.splice(id,1);
      setTaskList(deleteTask);
      setShowModal(false);
  }

  const onCliclModal = () => {
    setShowModal(true);
  }

  return (

    <>
     <DeleteIcon onClick={onCliclModal} className="sm:text-xl text-lg sm:ml-2 ml-3" >
     <i className="sm:text-4xl text-3xl fas fa-backspace"></i>
    </DeleteIcon>

    {
      showModal && 
      <Modal 
       cancel={() => setShowModal(false)}
       confirm={()=> onClickDelete()}
      />
    }
    </>
  )
}

