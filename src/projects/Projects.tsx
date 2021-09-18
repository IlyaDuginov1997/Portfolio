import React from 'react'
import styles from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project'


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>My projects</h2>

                <div className={styles.projects}>
                    <Project
                        img={'https://media.proglib.io/posts/2021/04/25/fd9c83201af23ad5fd10c9b86651a227.jpg'}
                        title={'Todolist'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, optio.'}/>
                    <Project
                        img={'https://media.proglib.io/posts/2021/04/25/fd9c83201af23ad5fd10c9b86651a227.jpg'}
                        title={'Social network'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, optio.'}/>
                </div>
            </div>
        </div>
    )
}