import React ,{useState} from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = ({children}) => {
  const [theme,setTheme]=useState("dark");
  const changeTheme=()=>{
    setTheme(mode);
  }

    return (
   <ThemeContext.Provider value={{theme,changeTheme}}>
         {children}
   </ThemeContext.Provider>
  )
}

export default ThemeProvider