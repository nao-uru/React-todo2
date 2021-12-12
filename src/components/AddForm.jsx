import styled from "styled-components"

const InputArea = styled.input`
width: 65%;
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

const Button= styled.button`
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

export const AddInput = (props) => {
  const { onChangeAddInput,addInputText,onClickAdd,addTaskEnter} = props;

  return (
   <>
   <div className="sm:text-lg text-sm w-full flex justify-center items-center mt-6">
   <InputArea onChange={onChangeAddInput} placeholder="ADD YOUR TASK" value={addInputText} onKeyPress={addTaskEnter}></InputArea>
   <Button onClick={onClickAdd}>ADD</Button>
   </div>
   </>
  )
}
