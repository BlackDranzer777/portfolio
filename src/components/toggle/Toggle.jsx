import React, { useContext } from 'react';
import './Toggle.css';
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from '../../context';

export default function Toggle({darkMode, french}) {
    const theme = useContext(ThemeContext);

    const toggleDarkmodeHandler = () => {
        theme.dispatch({type:"TOGGLE-DARKMODE"})
    }

    const toggleLanguageHandler = () => {
        theme.dispatch({type:"TOGGLE-LANGUAGE"})
    }

    return (
        <>
        <div className={darkMode ? "toggle" : "toggle-white"}>
            <img src={Moon} alt="" className="toggle-icon" />
            <img src={Sun} alt="" className="toggle-icon" />
            <div className="toggle-button" onClick={toggleDarkmodeHandler} style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
        <div className={(darkMode ? "toggle-language" : "toggle-white-language")}>
            <p className="toggle-icon-language">Fr</p>
            <p className="toggle-icon-language">En</p>
            <div className="toggle-button-language" onClick={toggleLanguageHandler} style={{left: theme.state.french ? 0 : 25}}></div>
        </div>
        </>
    )
}
