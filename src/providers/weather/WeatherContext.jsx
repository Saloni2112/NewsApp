import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer";

const weatherContext = createContext()

export const WeatherProvider = ({children}) => {

const initialState = {
    weather : []
    

}


 const [state , dispatch]=useReducer(WeatherReducer , initialState)


    return(
        <weatherContext.Provider value={{...state , dispatch}}>
            {children}
        </weatherContext.Provider>
    )
}


export default weatherContext;