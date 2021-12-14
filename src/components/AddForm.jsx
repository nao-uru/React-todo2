import styled from "styled-components"
import { FormContainer,Input,Button } from "../css/form"

const InputArea = styled(Input)`
 width: 70%;
`

export const AddInput = (props) => {
  const { onChangeAddInput,addInputText,onClickAdd,addTaskEnter} = props;

  return (
   <>
   <FormContainer className="sm:text-lg text-sm">
     
   <InputArea 
    onChange={onChangeAddInput} 
    placeholder="ADD YOUR TASK" 
    value={addInputText} 
    onKeyPress={addTaskEnter}>
    </InputArea>

   <Button onClick={onClickAdd}>ADD</Button>
   </FormContainer>
   </>
  )
}
