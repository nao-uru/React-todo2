
import React, { useState } from "react";
import {Header} from './components/Header'
import {Task} from './components/Task'
import {AddInput} from './components/AddForm'
import {SearchInput} from './components/SearchForm'
import {TaskAreaContainer} from './css'
import {searchTasks} from './components/Search'

export const App = () => {

  const INIT_DATA = [
    {
      id: 1,
      title: 'TASK1',
      active: true,
    },
    {
      id: 2,
      title: 'TASK2',
      active: true,
    },
  ]

  const [addInput, setAddInput] = useState('');
  const [searchInput,setSearchInput] = useState('');
  const [taskList, setTaskList] = useState(INIT_DATA,false);
  const [uniqueId, setUniqueId] = useState(INIT_DATA.length + 1);
  const newTasks = [
    ...taskList,
    {
      id: uniqueId,
      title: addInput,
      active: true,
    }];
    

  // タスク追加
  const onChangeAddInput = (event) => setAddInput(event.target.value);

  const addTask = (event) => {
      if(addInput === '') return;
      setTaskList(newTasks);
      setAddInput('');
      setUniqueId(uniqueId + 1);
    }

  const addTaskEnter = (event) => {
      if(addInput === '') return;
      if(event.key === 'Enter') {
        event.preventDefault()
        setTaskList(newTasks);
        setAddInput('');
        setUniqueId(uniqueId + 1);
      }
    }

  // タスク検索
  const onChangeSearchInput = (event) => setSearchInput(event.target.value);
  searchTasks(taskList,searchInput);

  return (
    <>
   <Header></Header>
    <div className="sm:w-370 w-4/5 m-auto">

       <div className="sm:w-full w-4/5">
       <AddInput
        onChangeAddInput={onChangeAddInput}
        addInputText={addInput}
        onClickAdd={addTask}
        addTaskEnter={addTaskEnter}
        />

       <SearchInput
        onChangeSearchInput={onChangeSearchInput}
        />
      </div>
       
      <div className="sm:w-full w-4/5">
       <TaskAreaContainer>
         {taskList.map((todo,id) => {
          return (
            <Task 
             key={id} 
             taskText={todo.title} 
             taskList={taskList} 
             id={id} 
             setTaskList={setTaskList}
             showList={todo.active}
             />
            )
            })}
       </TaskAreaContainer>
      </div>
       

    </div>

    </>
  )
}
