import React from 'react'
import styles from './Project.module.css';

export type ProjectPropsType = {
    img: string
    title: string
    description: string

}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>
                <a href=''>Check</a>
            </div>
            <h3 className={styles.someProject}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}