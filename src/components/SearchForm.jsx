import styled from "styled-components"
import { FormContainer,Input } from "../css/form";


const InputArea = styled(Input)`
 width: 100%;
 margin: 0 auto;
`

export const SearchInput = (props) => {

  const { onChangeSearchInput,searchInputText} = props;

  return (
   <>
   <FormContainer className="sm:text-lg text-sm">
     
   <InputArea 
    onChange={onChangeSearchInput} 
    value={searchInputText} 
    placeholder="SEARCH YOUR TASK" >
    </InputArea>

   </FormContainer>
   </>
  )
}
