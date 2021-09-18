import React from 'react'
import styles from './Skill.module.css';

export type SkillPropsType = {
    title: string
    description: string
    icon: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3 className={styles.someSkill}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}