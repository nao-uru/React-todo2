import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
`

export const ModalContainer = styled.div`
width: 300px;
border-radius: 10px;
padding: 24px 36px;
background-color: white;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
`

export const Button = styled.button`
box-shadow: 2px 3px 0px rgba(99, 99, 99, 0.25);
border-radius: 5px;
font-family: Noto Sans;
font-weight: bold;
font-size: 20px;
color: #4D4D4D;
background: #9DC8CE;
padding: 5px 10px;

&:hover {
 background: #787878;
}
`