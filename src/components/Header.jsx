import { HeaderBack } from "../css"

export const Header = () => {

    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth()+1;
  
  
  return (
    <HeaderBack className="md:h-60 h-40 font-bold font-sans">
      <h1 className="sm:text-4xl md:ml-20 ml-2 text-2xl">
        HELLO!<br/>
        What’s your plan today?<br/>
        <span className="sm:text-2xl text-xl">DATE : {month}.{date}</span>
      </h1>
    </HeaderBack>
  )
}