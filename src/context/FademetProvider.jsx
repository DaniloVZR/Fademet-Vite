import { useState, createContext } from "react";

export const FademetContext = createContext();

export const FademetProvider = ({ children }) => {

  const [hideNav, setHideNav] = useState(true)

  const ocultarNav = () => {
    setHideNav(!hideNav)
  }

  return (
    <FademetContext.Provider
      value={{
        hideNav,
        ocultarNav
      }}
    >
      {children}
    </FademetContext.Provider>)
}