import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("light")
    const toggle = () =>{
        if(theme === "light"){
            setTheme("dark")
        }
        else if(theme === "dark"){
            setTheme("light")
        }
    }
    const state = {
        theme, 
        toggle, 
        setTheme
    }
  return (
    <ThemeContext.Provider value={state}>
        {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => useContext(ThemeContext);
