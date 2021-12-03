import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = {darkMode : false, french : false};

const themeReducer = (state, action) => {
    switch(action.type){
        case "TOGGLE-DARKMODE":
            return {darkMode: !state.darkMode, french: state.french};
        case "TOGGLE-LANGUAGE":
            return {darkMode : state.darkMode, french: !state.french};
        default:
            return state;
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}