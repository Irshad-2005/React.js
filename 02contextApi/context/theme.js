import { createContext ,useContext} from "react";

export const themeContext = createContext({
    themeMode:"ligth",
    ligthTheme : ()=>{},
    darkTheme :()=>{}
});

export const ThemeProvider = themeContext.Provider ;

export default function useTheme(){

      return useContext(themeContext);
}