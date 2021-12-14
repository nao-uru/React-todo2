import styled from "styled-components";


export const TaskList = styled.li`
 width: 90%;
 height: 60px;
 margin: 20px auto 0 auto;
 box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
 border-radius: 5px;
 display: flex;
 align-items: center;
 position:reletive;

 &:focus {
  outline: none;
}
`
export const TaskInput = styled.input`
 height: 100%;
 width: 55%;
 padding: 0 10px;
 font-weight: bold;
 color: #4D4D4D;
 border-radius: 5px;


 &:focus {
  outline: none;
}
`

export const TaskDone = styled.div`
 width: 25%;
 height: 100%;
 background: #AA93DB;
 display: flex;
 justify-content:center;
 align-items: center;
 color: #FFFFFF;
 cursor: pointer;
 font-weight: bold;

//  transition:all 1.0s;
//  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

 &:hover {
   opacity:0.8;
 }
`
export const TaskDoneText = styled.p`
//  display: flex;
`
export const DeleteIcon = styled.div`
 color:#787878;
 display: flex;
 align-items: center;
 cursor: pointer;
 transition:all 1.0s;

 &:hover {
 color:#2D2C2C;
}
`