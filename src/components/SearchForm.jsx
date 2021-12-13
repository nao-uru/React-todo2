import styled from "styled-components"
import { Input } from "../css";


const InputArea = styled(Input)`
 width: 90%;
 margin: 0 auto;
`

export const SearchInput = (props) => {

  const { onChangeSearchInput,searchInputText} = props;

  return (
   <>
   <div className="sm:text-lg text-sm flex justify-start items-center mt-6">
   <InputArea onChange={onChangeSearchInput} value={searchInputText} placeholder="SEARCH YOUR TASK" ></InputArea>
   </div>
   </>
  )
}

