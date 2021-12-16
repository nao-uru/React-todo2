import { HeaderBack } from "../css/other"
import { HeaderTime } from "./header-component/Headertime"
import { HeaderMessage } from "./header-component/HeaderMessage"

export const Header = () => {
  return (
    <HeaderBack className="md:h-60 h-40 font-bold font-sans">
      <h1 className="sm:text-4xl text-2xl">HELLO!</h1>
      <HeaderMessage/>
      <p className="sm:text-2xl text-xl mt-2 sm:mt-4">DATE  :{HeaderTime()}</p>
    </HeaderBack>
  )
}

