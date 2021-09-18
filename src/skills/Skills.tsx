import React from 'react'
import styles from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';


export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My skills</h2>

                <div className={styles.skills}>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, optio.'} icon={'1'}/>
                    <Skill title={'Redux'} description={'Lo consectetur adipisicing elit. Blanditiis, optio'} icon={'2'}/>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, ptio.'} icon={'3'}/>
                </div>
            </div>
        </div>
    )
}