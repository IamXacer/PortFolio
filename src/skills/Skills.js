import React from "react";
import style from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'это легковесный, интерпретируемый или JIT-компилируемый'}/>
                    <Skill title={'Css'} description={'аблиці стилів css розміщуються в окремому файлі '}/>
                    <Skill title={'React'} description={'React спрощує створення інтерактивних інтерфейсів'}/>
                </div>
            </div>

        </div>
    )
}

export default Skills;
