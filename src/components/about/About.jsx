import React from 'react';
import './About.css';
import AboutImg from '../../img/about.jpg';

export default function About({darkMode, french}) {
    return (
        <div className={darkMode ? "about" : "about-white"}>
            <div className="about-left">
                <div className="about-card background"/>
                <div className="about-card">
                    <img src={AboutImg} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
            {/* <svg viewBox="0 0 500 500" className="blob-1" width="100%" >
                <path  d="M484.5,287.5Q482,325,452,350Q422,375,398,398Q374,421,345,436.5Q316,452,283,454Q250,456,215,460.5Q180,465,146,452.5Q112,440,93,409Q74,378,56,348.5Q38,319,42,284.5Q46,250,42,215.5Q38,181,59.5,154Q81,127,93.5,89.5Q106,52,143.5,45Q181,38,215.5,22Q250,6,284,23Q318,40,349,56Q380,72,405,95.5Q430,119,444,150.5Q458,182,472.5,216Q487,250,484.5,287.5Z" fill="#333"></path>
            </svg> */}
                <svg className="blob-1" id="visual" viewBox="150 100 600 400" width="900" height="600"  version="1.1"><g transform="translate(446.59943011163557 296.89354952537377)"><path d="M182 -179C229.2 -134.8 256.1 -67.4 257.6 1.5C259.1 70.5 235.3 140.9 188.1 187.3C140.9 233.6 70.5 255.8 4.3 251.5C-61.9 247.2 -123.7 216.4 -169.7 170.1C-215.7 123.7 -245.9 61.9 -250.3 -4.4C-254.7 -70.7 -233.4 -141.4 -187.4 -185.6C-141.4 -229.8 -70.7 -247.4 -1.6 -245.7C67.4 -244.1 134.8 -223.2 182 -179" fill="none" stroke={darkMode ? "#ffc500" : "#333"} stroke-width="6"></path></g></svg>
                <div className="about-right-wrapper">
                    <h1 className={darkMode ? "about-title" : "about-title-white"}>{french ? "À Propos de Moi" :"About Me"}</h1>
                    <p className="about-subject">It is a long established fact that a reader 
                        will be distracted by the readable content of a page 
                        when looking at its layout.
                    </p>
                    <p className="about-desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    {/* <div className="about-award">
                        <img src={Award} alt="" className="about-award-img" />
                        <div className="about-award-texts">

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
