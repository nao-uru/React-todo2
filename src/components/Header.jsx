import { HeaderBack } from "../css/other"
import { HeaderTime } from "./header-component/Headertime"
import { HeaderMessage } from "./header-component/HeaderMessage"
import { useMemo } from "react";

export const Header = () => {

  const message = useMemo(()=> HeaderMessage(),[]);

  return (
    <HeaderBack className="md:h-60 h-40 font-bold font-sans">
      <h1 className="sm:text-4xl text-2xl">HELLO!</h1>
      {message}
      <p className="sm:text-2xl text-xl mt-2 sm:mt-4">DATE  :{HeaderTime()}</p>
    </HeaderBack>
  )
}

