import { HeaderBack } from "../css/other"

export const Header = () => {

  const getTime = () => {
    let today = new Date();
    let minute = today.getMinutes()
    let hour = today.getHours();
    let date = today.getDate();
    let month = today.getMonth()+1;
    var minuteWithZero = ( '000' + minute ).slice( -2 );

    return `${month}.${date}   ${hour}:${minuteWithZero}`
  }
  setTimeout(getTime(),1000);
  
  return (
    <HeaderBack className="md:h-60 h-40 font-bold font-sans">
      <h1 className="sm:text-4xl md:ml-20 ml-2 text-2xl">
        HELLO!<br/>
        What’s your plan today?
        <p className="sm:text-2xl text-xl mt-2 sm:mt-4">DATE  :{getTime()}</p>
      </h1>
    </HeaderBack>
  )
}

