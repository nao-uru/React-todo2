import styled from "styled-components"
import { Input } from "../css"
import { Button } from "../css"

const InputArea = styled(Input)`
 width: 65%;
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
