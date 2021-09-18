import React from 'react'
import styles from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.text}>
                    <span>Hi, there</span>
                    <h1>Ilya Duginov</h1>
                    <p>I am frontend developer</p>
                </div>
                <div className={styles.photo}>
                    Photo
                </div>
            </div>
        </div>
    )
}