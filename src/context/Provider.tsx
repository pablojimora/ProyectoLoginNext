import { JSX, useState } from "react";
import { MyContext} from "./Context";

interface props {
    children: JSX.Element | JSX.Element[]
}

export const Provider = ({children}:props) => {

  const [userLogged, setUserLogged] = useState({});
  const [isSelected, setIsSelected] = useState(true);
  const [visibleForm, setVisibleForm] = useState(false)


  return (
    // dentro del value se pasa todo lo que yo quiero que sea compartido en la app
    <MyContext.Provider value={{userLogged, setUserLogged, isSelected, setIsSelected, visibleForm, setVisibleForm}}> 
        {children}
    </MyContext.Provider>
  )
}
