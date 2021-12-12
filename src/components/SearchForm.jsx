import styled from "styled-components"


const InputArea = styled.input`
width: 90%;
margin: 0 auto;
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

// const Button= styled.button`
// width: 25%;
// height: 52px;
// background: #82AEE1;
// box-shadow: 2px 3px 0px rgba(99, 99, 99, 0.25);
// border-radius: 5px;
// margin-left: 10px;
// font-family: Noto Sans;
// font-weight: bold;
// color: #4D4D4D;

// &:active {
//   background: #787878;
//   box-shadow: none;
// }
// `

export const SearchInput = (props) => {

  const { onChangeSearchInput,searchInputText} = props;

  return (
   <>
   <div className="sm:text-lg text-sm flex justify-start items-center mt-6">
   <InputArea onChange={onChangeSearchInput} value={searchInputText} placeholder="SEARCH YOUR TASK" ></InputArea>
   {/* <Button>SEARCH</Button> */}
   </div>
   </>
  )
}

