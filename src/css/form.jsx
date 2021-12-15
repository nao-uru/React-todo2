import styled from "styled-components";

export const FormContainer = styled.div`
 width:90%;
 margin: 10% auto 0 auto; 
 display: flex;
 justify-content: center;
 align-items: center;
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
margin-left: 5%;
font-family: Noto Sans;
font-weight: bold;
color: #4D4D4D;

&:active {
 background: #787878;
 box-shadow: none;
}
`

