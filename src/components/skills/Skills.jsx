import React,{useContext} from 'react';
import Card from '../card/Card';
import './Skills.css';
import { ThemeContext } from '../../context';

import Wit from '../../icons/wit.png';
import Python from '../../icons/python.png';
import BotFramework from '../../icons/botframework.png';
import ExpressJs from '../../icons/express.png';
import Luis from '../../icons/luis.png';
import Docker from '../../icons/docker.png';
import Azure from '../../icons/azure.png';
import JS from '../../icons/js.png';
import NODE from '../../icons/node.png';
import PHP from '../../icons/php.png';
import REACT from '../../icons/react.png';
import HTML5 from '../../icons/html5.png';
import CSS3 from '../../icons/CSS3.png';

export default function Skills() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={darkMode ? "skills" : "skills-white"}>
            <div className="skills-texts">
                <h1 className={darkMode ? "skills-title" : "skills-title-white"}>
                    Skills & Technology
                </h1>
                <p className="skills-description">
                I am confident and proficient in the following
                technologies and created many projects in these technology stack.
                I am confident and proficient in the following
                technologies and created many projects in these technology stack.
                </p>
            </div>
            <div className="skills-list">
                <Card image={Wit} width={''} height={''} text={'WIT.ai'}/>
                <Card image={Python} width={''} height={''} text={'Python'}/>
                <Card image={BotFramework} width={''} height={''} text={'BotFramework'}/>
                <Card image={ExpressJs} width={''} height={''}text={'Express.JS'}/>
                <Card image={Luis} width={''} height={''} text={'LUIS.ai'}/>
                <Card image={NODE} width={''} height={''} text={'Node.js'}/>
                <Card image={PHP} width={''} height={''} text={'PHP'}/>
                <Card image={JS} width={''} height={''} text={'Javascript'}/>
                <Card image={REACT} width={''} height={''} text={'React'}/>
                <Card image={Docker} width={''} height={''} text={'Docker'}/>
                <Card image={Azure} width={''} height={''} text={'Azure'}/>
                <Card image={HTML5} width={''} height={''} text={'HTML 5'}/>
                <Card image={CSS3} width={''} height={''} text={'CSS 3'}/>
            </div>
        </div>
    )
}
