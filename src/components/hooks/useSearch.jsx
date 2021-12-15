
// タスク検索
export const useSearchTasks = (taskList,searchInput) => {
    
  for(let i = 0; i <taskList.length; i++) {
    const taskText = taskList[i].title;

    if(taskText.toLowerCase().startsWith(searchInput.toLowerCase()) === true) {
      taskList[i].active = true;
    }else {
      taskList[i].active = false;
    }
  }
}


