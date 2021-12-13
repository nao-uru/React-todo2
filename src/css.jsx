import styled from "styled-components";

export const HeaderBack= styled.div`
 width: 100%;
 background-color: #EAF7F9;
 display: flex;
 align-items:center;
`

export const TaskAreaContainer = styled.div`
 margin: 20px auto 0 auto;
 width:90%;
 padding-top: 30px;
 min-height:150px;
 background: #FFFFFF;
 box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
 justify-content: center;
`

export const Input = styled.input`
 height: 55px;
 padding-left:10px;
 background: #FFFFFF;
 box-shadow: inset 0px 4px 4px rgba(99, 99, 99, 0.25);
 border-radius: 5px;
 font-weight: bold;
 color: #4D4D4D;
 
 &:focus {
  outline: none;
}
`

export const Button= styled.button`
 width: 25%;
 height: 55px;
 background: #9DC8CE;
 box-shadow: 2px 3px 0px rgba(99, 99, 99, 0.25);
 border-radius: 5px;
 margin-left: 10px;
 font-family: Noto Sans;
 font-weight: bold;
 color: #4D4D4D;
 
 &:active {
  background: #787878;
  box-shadow: none;
}
`

export const Hover = styled.div`
 cursor: pointer;
 transition:all 1.0s;
` 

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
 width: 55%;
 height: 100%;
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
//  transition:all 1.0s;
//  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

 &:hover {
   opacity:0.8;
 }
`
export const TaskDoneText = styled.p`
 font-weight: bold;
 display: flex;
 cursor: pointer;
`
export const DeleteIcon = styled.div`
 height: 100%;
 color:#787878;
 display: flex;
 align-items: center;
 cursor: pointer;
 transition:all 1.0s;

 &:hover {
 color:#2D2C2C;
}
`