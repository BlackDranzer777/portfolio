import React from 'react';
import './Intro.css';

export default function Intro({darkMode,french}) {
    return (
        <div className={darkMode ? "intro" : "intro-white"}>
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-heading">{french ? "Salut! Je m'appelle" :"Hello, My name is"}</h2>
                    <h1 className="intro-name">Divyansh Jain</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className={darkMode ? "intro-title-item" : "intro-title-item-white"}>{french ? "Développeur web" : "Web Developer"}</div>
                            <div className={darkMode ? "intro-title-item" : "intro-title-item-white"}>{french ? "Concepteur UI/UX" : "UI/UX Designer"} </div>
                            <div className={darkMode ? "intro-title-item" : "intro-title-item-white"}>{french ? "Fan de Foot" : "Football Fanatic"}</div>
                            <div className={darkMode ? "intro-title-item" : "intro-title-item-white"}>{french ? "Bibliophile" : "Bibliophile"}</div>
                            <div className={darkMode ? "intro-title-item" : "intro-title-item-white"}>Potterhead</div>
                        </div>
                    </div>
                    <p className="intro-desc">
                        {french ? 
                        "Je conçois et développe des services pour des clients de toutes tailles, spécialisé dans la création de sites Web élégants et modernes, de services Web et de boutiques en ligne."
                        : "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."}
                    </p>
                </div>
            </div>
            <div className="intro-right">
            <div className={darkMode ? "intro-bg-cover" : "intro-bg-cover-white"}></div>
                <div className="intro-bg"></div>
            </div>
        </div>
    )
}
