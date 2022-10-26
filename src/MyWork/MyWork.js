import React from "react";
import style from './MyWork.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Skill from "../skills/skill/Skill";

function MyWork() {
    return(
        <div className={style.MyWorkBlock}>
            <div className={`${styleContainer.container} ${style.MyWorkContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.work}>
                    <Skill title={'Watch'} description={'это легковесный, интерпретируемый или JIT-компилируемый'}/>
                    <Skill title={'Watch'} description={'аблиці стилів css розміщуються в окремому файлі '}/>

                </div>
            </div>

        </div>
    )
}

export default MyWork