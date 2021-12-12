import styled from "styled-components"


const HeaderBack= styled.div`
 width: 100%;
 background-color: #EAF7F9;
 display: flex;
 align-items:center
`

export const Header = () => {

  return (
    <HeaderBack className="md:h-60 h-40">
      <h1 className="sm:text-4xl font-bold font-sans w-full md:ml-20 ml-2 text-2xl">HELLO!<br/>What’s your plan today?</h1>
    </HeaderBack>
  )
}