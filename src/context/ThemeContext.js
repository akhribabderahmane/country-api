import React,{createContext, useMemo, useState} from 'react'
export const ThemeContext=createContext();
const ThemeContextProvider = (props) => {
    const [theme,setTheme]=useState({
        background:"#202c37",
        elemntBackground:"#2b3945",
        titleColor:"#fefefe",
        textColor:"#fafafa"
    })
    const [mode,setMode]=useState('dark');
    const changeMode=()=>{
      if(mode==='dark'){
        setMode('light')
      }else{
        setMode('dark')
      }
    }
    const changeTheme=useMemo(()=>{
      if (mode==='light'){
         setTheme({
          background:"#fafafa",
          elemntBackground:"#ffffff",
          titleColor:"#111517",
          textColor:"#858585"
      })
      }else{
        setTheme({
          background:"#202c37",
          elemntBackground:"#2b3945",
          titleColor:"#ffffff",
          textColor:"#fafafa"
      })
      }
  },[mode]);
    return ( 
        <ThemeContext.Provider value={{mode,theme,changeMode}}>
          {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;