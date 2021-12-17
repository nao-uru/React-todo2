import { NoTask } from "../../css/task";


export const NothingTaskMessage = (taskCount) => {
  if(taskCount.length <= 0) 

  return (
    <>
     <NoTask>
       NO TASK HERE !!!
     </NoTask>
    </>
  )
}