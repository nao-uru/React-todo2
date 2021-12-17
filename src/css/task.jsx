import styled,{ keyframes } from "styled-components";



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
 transition:all 0.8s;

 position: relative;

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
 transition:all 0.8s;
 height: 100%;

 &:hover {
 color:#2D2C2C;
}
`

const fadeIn = keyframes`
  0 {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const  TaskDoneMessage = styled.div`
 animation: ${fadeIn} 1s ease-in-out forwards;
 position:absolute;
 top: -35%;
 color: #82AEE1;
`

 export const NoTask = styled.p`
  text-align: center;
  font-weight: bold;
  color:#787878;
`